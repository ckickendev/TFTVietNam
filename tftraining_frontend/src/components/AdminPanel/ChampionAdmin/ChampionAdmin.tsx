import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  addChampionAPI,
  deleteChampionById,
  editChampionAPI,
  getAllChampionAPI,
} from "../../../api/championApi";
import { errorEmptyInputObject } from "../../../utils/function";
import DialogCustom from "../../../utils/DialogCustom";
import { validateNumber } from "../../../utils/function";
import loadingStore from "../../../store/loadingStore";
import { TextComponent } from "../../CommonComponent/TextComponent";
import { ChampionAddForm } from "./ChampionAddForm";
// import { COLOR } from "../../constants";
import { COLOR } from "../../constants";
import { ADMIN_TABLE_STYLE } from "../style";
import { ChampionTooltip } from "../../CommonComponent/Tooltip/ChampionTooltip";

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

export interface IChampionData {
  _id: string;
  avatar: string;
  bgimage: string;
  name: string;
  name_api: string;
  cost: number;
  skill: string;
}

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
  const [deleteChampion, setDeleteChampion] = useState("");
  const [inputChampion, setInputChampion] = useState({
    idEdit: "SAMPLE",
    avatar: "",
    bgimage: "",
    name: "",
    name_api: "",
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
            bgimage: newChampionData.bgimage,
            name: newChampionData.name,
            name_api: newChampionData.name_api,
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
        bgimage: "",
        name: "",
        name_api: "",
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

  const handleDeleteChampion = async () => {
    try {
      loadingStore.setIsLoading(true);
      const handlerDelete = await deleteChampionById(deleteChampion);
      if (handlerDelete) {
        loadingStore.setIsLoading(false);
        setAllChampions((allChampions: IChampionData[]) => {
          const newArrayAllChampions = allChampions.filter(
            (champion) => champion._id !== deleteChampion
          );
          return newArrayAllChampions;
        });
        cancelFormDeleteChampion();
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

  const cancelFormDeleteChampion = () => {
    setDeleteChampion("");
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
    setUnableInput(true);
  };

  const handleEditChampion = async () => {
    console.log("inputChampion", inputChampion);
    
    try {
      const inputDataChampion = {
        _id: inputChampion.idEdit,
        avatar: inputChampion.avatar,
        bgimage: inputChampion.bgimage,
        name: inputChampion.name,
        name_api: inputChampion.name_api,
        cost: inputChampion.cost,
        skill: inputChampion.skill,
      };
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
      const editChampionData = await editChampionAPI(inputChampion);
      if (editChampionData) {
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
          bgimage: "",
          name: "",
          name_api: "",
          cost: 0,
          skill: "",
        });
        setUnableInput(false);
        loadingStore.setIsLoading(false);
      } else {
        setErrorAddChampion({
          error: "Some error is occur, No data update",
          isError: true,
        });
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

  const onHandleAddButton = () => {
    setUnableInput((pre: boolean) => {
      return !pre;
    });
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
        <TableContainer sx={ADMIN_TABLE_STYLE.tableContainer}>
          <Button onClick={onHandleAddButton} variant="contained">
            Add Champion
          </Button>
          <TextComponent sx={ADMIN_TABLE_STYLE.tableCellSx}>
            No data found
          </TextComponent>
          
        </TableContainer>
      ) : (
        <TableContainer sx={ADMIN_TABLE_STYLE.tableContainer}>
          <div style={{display: 'flex', justifyContent: 'end'}}>
          <Button onClick={onHandleAddButton} variant="contained">
            Add Champion
          </Button>
          </div>
          
          <Table
            aria-label="customized table"
            sx={{ backgroundColor: COLOR.WHITE, marginBottom: 4 }}
          >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={ADMIN_TABLE_STYLE.tableCellHeader}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell
                  sx={ADMIN_TABLE_STYLE.tableCellHeader}
                  align="center"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allChampions.map((champion: IChampionData, index) => {
                return (
                  <RowData
                    key={index}
                    index={index}
                    champion={champion}
                    onEditHandler={onEditHandler}
                    handleDeleteChampion={handleDeleteChampion}
                    setDeleteChampion={setDeleteChampion}
                  />
                );
              })}
            </TableBody>
          </Table>
          
        </TableContainer>
      )}
      {unableInput && (
        <ChampionAddForm
          inputChampion={inputChampion}
          inputNewChampion={inputNewChampion}
          title={
            inputChampion?.idEdit == "SAMPLE"
              ? "Add Champion"
              : "Edit Champion Detail"
          }
          handleSubmit={handleAddChampion}
          cancelModel={addRowAddChampion}
          handleEditChampion={handleEditChampion}
        />
      )}
      <DialogCustom
        isOpen={deleteChampion != ""}
        content="Do you really want delete this champion, this may be cannot to undo."
        title="Delete this champion?"
        disaggreeTitle="Cancel"
        aggreeTitle="Delete"
        confirmHandler={handleDeleteChampion}
        cancelHandler={cancelFormDeleteChampion}
      />
    </>
  );
};

const RowData = (props: any) => {
  const { index, champion, onEditHandler, setDeleteChampion } = props;
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <ChampionTooltip id={champion._id} />
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        <TextComponent>{champion.name}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        <TextComponent>{champion.cost}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        <TextComponent style={{whiteSpace: "pre-wrap"}} >{champion.skill}</TextComponent>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{
            minWidth: 100,
            marginRight: 2,
            ...ADMIN_TABLE_STYLE.tableCellSx,
          }}
          color="secondary"
          onClick={() => {
            onEditHandler(champion._id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          sx={{ minWidth: 100, ...ADMIN_TABLE_STYLE.tableCellSx }}
          color="error"
          onClick={() => {
            setDeleteChampion(champion._id);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
