import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  TextFieldComponent,
  NumberFieldComponent,
} from "../../CommonComponent/TextFieldComponent";
import {
  deleteChampionById,
  editChampionAPI,
  getAllChampionAPI,
} from "../../../api/championApi";
import { errorEmptyInputObject } from "../../../utils/function";
import DialogCustom from "../../../utils/DialogCustom";
import { validateNumber } from "../../../utils/function";
import { addChampionAPI } from "../../../api/championApi";
import loadingStore from "../../../store/loadingStore";

interface Column {
  id: "avatar" | "name" | "cost" | "skill";
  label: string;
  align?: "right" | "center" | "left" | "inherit" | "justify" | undefined;
  format?: (value: number) => string;
}
const columns: readonly Column[] = [
  { id: "avatar", label: "Avatar", align: "center" },
  { id: "name", label: "Name", align: "center" },
  {
    id: "cost",
    label: "Cost",
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "skill",
    label: "Skill",
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

interface IChampionData {
  _id: string;
  avatar: string;
  name: string;
  cost: number;
  skill: string;
}

const tableCellSx = {
  color: "white",
  fontWeight: 300,
};

export const ChampionAdmin = () => {
  useEffect(() => {
    const getAllChampion = async () => {
      loadingStore.setIsLoading(true);
      const champions = await getAllChampionAPI();
      setAllChampions(champions.data.allChampions);
      loadingStore.setIsLoading(false);
    };
    getAllChampion();
  }, []);

  const [allChampions, setAllChampions] = useState<IChampionData[]>([]);
  const [errorAddChampion, setErrorAddChampion] = useState({
    error: "",
    isError: false,
  });
  const [unableInput, setUnableInput] = useState(false);
  const [inputChampion, setInputChampion] = useState({
    idEdit: "SAMPLE",
    avatar: "",
    name: "",
    cost: 0,
    skill: "",
  });

  const handleAddChampion = async () => {
    try {
      loadingStore.setIsLoading(true);
      const isErrorEmpty = errorEmptyInputObject(inputChampion);
      if (isErrorEmpty) {
        setErrorAddChampion((state) => {
          return { error: isErrorEmpty, isError: !state.isError };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      if (!validateNumber(inputChampion.cost).isValid) {
        setErrorAddChampion((state) => {
          return {
            error: validateNumber(inputChampion.cost, "cost").message,
            isError: !state.isError,
          };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      const newChampionData = await addChampionAPI(inputChampion);
      setAllChampions((allChampions: IChampionData[]) => {
        const newArrayAllChampions = [
          {
            _id: newChampionData._id,
            avatar: newChampionData.avatar,
            name: newChampionData.name,
            cost: newChampionData.cost,
            skill: newChampionData.skill,
          },
          ...allChampions,
        ];
        return newArrayAllChampions;
      });
      setInputChampion({
        idEdit: "SAMPLE",
        avatar: "",
        name: "",
        cost: 0,
        skill: "",
      });
      setUnableInput(false);
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      setErrorAddChampion((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
      loadingStore.setIsLoading(false);
    }
  };

  const handleDeleteChampion = async (id: string) => {
    try {
      loadingStore.setIsLoading(true);
      const handlerDelete = await deleteChampionById(id);

      if (handlerDelete) {
        loadingStore.setIsLoading(false);
        setAllChampions((allChampions: IChampionData[]) => {
          const newArrayAllChampions = allChampions.filter(
            (champion) => champion._id !== id
          );
          return newArrayAllChampions;
        });
        return;
      }
    } catch (err: any) {
      loadingStore.setIsLoading(false);
      setErrorAddChampion((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
    }
  };

  const addRowAddChampion = () => {
    setUnableInput((state) => !state);
  };

  const onCloseDialogHandler = async () => {
    setErrorAddChampion((state) => {
      return { error: "", isError: !state.error };
    });
  };

  const inputNewChampion = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setInputChampion((state) => {
      return { ...state, [field]: e.target.value };
    });
  };

  const onEditHandler = (idEdit: string) => {
    setInputChampion((oldInputChampion: any) => {
      const filterData = allChampions.filter((champion) => {
        if (champion._id === idEdit) {
          return champion;
        }
        return undefined;
      });
      const inputData = filterData[0];
      return { idEdit: idEdit, unable: true, ...inputData };
    });
  };

  const handleEditChampion = async () => {
    try {
      const inputDataChampion = {
        _id: inputChampion.idEdit,
        avatar: inputChampion.avatar,
        name: inputChampion.name,
        cost: inputChampion.cost,
        skill: inputChampion.skill,
      };
      loadingStore.setIsLoading(true);
      console.log("inputChampion", inputChampion);
      const isErrorEmpty = errorEmptyInputObject(inputChampion);
      if (isErrorEmpty) {
        setErrorAddChampion((state) => {
          return { error: isErrorEmpty, isError: !state.isError };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      if (!validateNumber(inputChampion.cost).isValid) {
        setErrorAddChampion((state) => {
          return {
            error: validateNumber(inputChampion.cost, "cost").message,
            isError: !state.isError,
          };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      const editChampionData = await editChampionAPI(inputChampion);
      if (editChampionData.responseData.modifiedCount) {
        setAllChampions((allChampions: IChampionData[]) => {
          const newArrayAllChampions = allChampions.map((championElement) => {
            return championElement._id === inputChampion.idEdit
              ? inputDataChampion
              : championElement;
          });
          return newArrayAllChampions;
        });
        setInputChampion({
          idEdit: "SAMPLE",

          avatar: "",
          name: "",
          cost: 0,
          skill: "",
        });
        setUnableInput(false);
        loadingStore.setIsLoading(false);
      }
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      setErrorAddChampion((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
      loadingStore.setIsLoading(false);
    }
  };

  return (
    <>
      {errorAddChampion.isError && (
        <DialogCustom
          onClose={onCloseDialogHandler}
          isOpen={errorAddChampion.isError}
          title={errorAddChampion.error}
          content="Please check again"
          displayAggree={false}
          displayDisaggree={false}
        />
      )}
      {allChampions.length === 0 ? (
        <Typography>No data</Typography>
      ) : (
        <TableContainer sx={{ padding: 1, textAlign: "center" }}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ bgcolor: "#000", ...tableCellSx }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  sx={{ bgcolor: "#000", ...tableCellSx }}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ height: "100%" }}>
                <TableCell colSpan={6} align="center">
                  <AddCircleIcon
                    onClick={addRowAddChampion}
                    fontSize="large"
                    color="success"
                  />
                </TableCell>
              </TableRow>
              {unableInput && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <TextFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewChampion(e, "avatar");
                      }}
                      variant="filled"
                      value={inputChampion.avatar}
                      textColor="white"
                      placeholder="Link image avatar"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    <TextFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewChampion(e, "name");
                      }}
                      variant="filled"
                      value={inputChampion.name}
                      textColor="white"
                      placeholder="Enter Name"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    <NumberFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewChampion(e, "cost");
                      }}
                      variant="filled"
                      value={inputChampion.cost}
                      textColor="white"
                      placeholder="Enter Cost"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    <TextFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewChampion(e, "skill");
                      }}
                      variant="filled"
                      value={inputChampion.skill}
                      textColor="white"
                      placeholder="Enter Skill"
                    />
                  </TableCell>
                  {inputChampion.idEdit !== "SAMPLE" ? (
                    <TableCell align="center">
                      <Button
                        onClick={handleEditChampion}
                        variant="contained"
                        sx={{ minWidth: 100, ...tableCellSx }}
                        color="warning"
                      >
                        Edit
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell align="center">
                      <Button
                        onClick={handleAddChampion}
                        variant="contained"
                        sx={{ minWidth: 100, ...tableCellSx }}
                        color="success"
                      >
                        Add
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              )}

              {allChampions.map((champion: IChampionData, index) => {
                if (champion._id === inputChampion.idEdit) {
                  return undefined;
                }
                return (
                  <RowData
                    index={index}
                    champion={champion}
                    onEditHandler={onEditHandler}
                    handleDeleteChampion={handleDeleteChampion}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

const RowData = (props: any) => {
  const { index, champion, onEditHandler, handleDeleteChampion } = props;
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <img src={champion.avatar} width={50} height={50} alt="avatar" />
      </TableCell>
      <TableCell align="center" sx={tableCellSx}>
        <Typography>{champion.name}</Typography>
      </TableCell>
      <TableCell align="center" sx={tableCellSx}>
        <Typography>{champion.cost}</Typography>
      </TableCell>
      <TableCell align="center" sx={tableCellSx}>
        <Typography>{champion.skill}</Typography>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{ minWidth: 100, marginRight: 2, ...tableCellSx }}
          color="secondary"
          onClick={() => {
            onEditHandler(champion._id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          sx={{ minWidth: 100, ...tableCellSx }}
          color="error"
          onClick={() => {
            handleDeleteChampion(champion._id);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
