import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useEffect, useState } from "react";
import loadingStore from "../../../store/loadingStore";
import DialogCustom from "../../../utils/DialogCustom";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TextFieldComponent } from "../../CommonComponent/TextFieldComponent";
import {
  addTraitAPI,
  deleteTraitById,
  editTraitAPI,
  getAllTraitsAPI,
} from "../../../api/traitAPI.js";
import { errorEmptyInputObject } from "../../../utils/function";
import { TextComponent } from "../../CommonComponent/TextComponent";

interface Column {
  id: "image" | "name" | "effect" | "unit_activate";
  label: string;
  align?: "right" | "center" | "left" | "inherit" | "justify" | undefined;
}
const columns: readonly Column[] = [
  { id: "image", label: "Image", align: "center" },
  { id: "name", label: "Name", align: "center" },
  {
    id: "effect",
    label: "Effect",
    align: "center",
  },
  {
    id: "unit_activate",
    label: "Activate Unit",
    align: "center",
  },
];
interface ITraitData {
  _id: string;
  image: string;
  name: string;
  effect: string;
  unit_activate: Array<IUnitActivate>;
}

interface IUnitActivate {
  count_activate: number;
  effect_activate: string;
}

const tableCellSx = {
  color: "white",
  fontWeight: 300,
};

export const TraitAdmin = () => {
  useEffect(() => {
    const getAllTraits = async () => {
      loadingStore.setIsLoading(true);
      const traits = await getAllTraitsAPI();
      setAllTraits(traits.data.allTraits);
      loadingStore.setIsLoading(false);
    };
    getAllTraits();
  }, []);

  const [allTraits, setAllTraits] = useState<ITraitData[]>([]);
  const [errorAddTrait, setErrorAddTrait] = useState({
    error: "",
    isError: false,
  });
  const [unableInput, setUnableInput] = useState(false);
  const [inputTrait, setInputTrait] = useState({
    idEdit: "SAMPLE",
    image: "",
    name: "",
    effect: "",
    unit_activate: [{ count_activate: 0, effect_activate: "" }],
  });

  const handleAddTrait = async () => {
    try {
      loadingStore.setIsLoading(true);
      console.log("input trait to add", inputTrait);

      const isErrorEmpty = errorEmptyInputObject(inputTrait);
      if (isErrorEmpty) {
        setErrorAddTrait((state) => {
          return { error: isErrorEmpty, isError: !state.isError };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      const newTraitData = await addTraitAPI(inputTrait);
      setAllTraits((allTraits: ITraitData[]) => {
        const newArrayAllTraits = [
          {
            _id: newTraitData._id,
            image: newTraitData.image,
            name: newTraitData.name,
            effect: newTraitData.effect,
            unit_activate: newTraitData.unit_activate,
          },
          ...allTraits,
        ];
        return newArrayAllTraits;
      });
      setInputTrait({
        idEdit: "SAMPLE",
        image: "",
        name: "",
        effect: "",
        unit_activate: [{ count_activate: 0, effect_activate: "" }],
      });
      setUnableInput(false);
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      setErrorAddTrait((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
      loadingStore.setIsLoading(false);
    }
  };

  const handleDeleteTrait = async (id: string) => {
    try {
      loadingStore.setIsLoading(true);
      const handlerDelete = await deleteTraitById(id);
      if (handlerDelete) {
        loadingStore.setIsLoading(false);
        setAllTraits((allTraits: ITraitData[]) => {
          const newArrayAllTraits = allTraits.filter(
            (trait) => trait._id !== id
          );
          return newArrayAllTraits;
        });
        return;
      }
    } catch (err: any) {
      loadingStore.setIsLoading(false);
      setErrorAddTrait((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: !state.error,
        };
      });
    }
  };

  const addRowAddTrait = () => {
    setUnableInput((state) => !state);
  };

  const onCloseDialogHandler = async () => {
    setErrorAddTrait((state) => {
      return { error: "", isError: !state.error };
    });
  };

  const inputNewTrait = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setInputTrait((state) => {
      return { ...state, [field]: e.target.value };
    });
  };

  const onEditHandler = (idEdit: string) => {
    setInputTrait((oldInputTrait: any) => {
      const filterData = allTraits.filter((trait) => {
        if (trait._id === idEdit) {
          return trait;
        }
        return undefined;
      });
      const inputData = filterData[0];
      return { idEdit: idEdit, unable: true, ...inputData };
    });
    setUnableInput(true);
  };

  const inputChangeUnitActivate = (e: any, position: number, type: number) => {
    if (type === 1) {
      const newUnitActivateArray = inputTrait.unit_activate.map(
        (unit, index) => {
          if (index === position) {
            return {
              count_activate: e.target.value,
              effect_activate: unit.effect_activate,
            };
          }
          return unit;
        }
      );
      setInputTrait((traits) => {
        return {
          ...traits,
          unit_activate: newUnitActivateArray,
        };
      });
    } else {
      const newUnitActivateArray = inputTrait.unit_activate.map(
        (unit, index) => {
          if (index === position) {
            return {
              count_activate: unit.count_activate,
              effect_activate: e.target.value,
            };
          }
          return unit;
        }
      );
      setInputTrait((traits) => {
        return {
          ...traits,
          unit_activate: newUnitActivateArray,
        };
      });
    }
  };

  const addMoreUnitTrait = () => {
    setInputTrait((traits) => {
      return {
        ...traits,
        unit_activate: [
          ...traits.unit_activate,
          { count_activate: 0, effect_activate: "" },
        ],
      };
    });
  };

  const handleEditTrait = async () => {
    try {
      const inputDataTrait = {
        _id: inputTrait.idEdit,
        name: inputTrait.name,
        image: inputTrait.image,
        effect: inputTrait.effect,
        unit_activate: inputTrait.unit_activate,
      };
      loadingStore.setIsLoading(true);
      const isErrorEmpty = errorEmptyInputObject(inputTrait);
      if (isErrorEmpty) {
        setErrorAddTrait((state) => {
          return { error: isErrorEmpty, isError: true };
        });
        loadingStore.setIsLoading(false);
        return;
      }
      const editTraitData = await editTraitAPI(inputDataTrait);
      if (editTraitData) {
        setAllTraits((allTraits: ITraitData[]) => {
          const newArrayAllTraits = allTraits.map((traitElement) => {
            return traitElement._id === inputTrait.idEdit
              ? inputDataTrait
              : traitElement;
          });
          return newArrayAllTraits;
        });
        setInputTrait({
          idEdit: "SAMPLE",
          name: "",
          image: "",
          effect: "",
          unit_activate: [{ count_activate: 0, effect_activate: "" }],
        });
        setUnableInput(false);
        loadingStore.setIsLoading(false);
      } else {
        setErrorAddTrait({
          error: "Some error is occur, No data update",
          isError: true,
        });
      }
      loadingStore.setIsLoading(false);
    } catch (err: any) {
      setErrorAddTrait((state) => {
        return {
          error: err?.response?.data?.error || err?.message,
          isError: true,
        };
      });
      loadingStore.setIsLoading(false);
    }
  };

  return (
    <>
      {errorAddTrait.isError && (
        <DialogCustom
          onClose={onCloseDialogHandler}
          isOpen={errorAddTrait.isError}
          title={errorAddTrait.error}
          content="Please check again"
          displayAggree={false}
          displayDisaggree={false}
        />
      )}
      {allTraits.length === 0 ? (
        <TableContainer sx={{ padding: 1, textAlign: "center" }}>
          <TextComponent sx={tableCellSx}>No data found</TextComponent>
        </TableContainer>
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
                    onClick={addRowAddTrait}
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
                        inputNewTrait(e, "image");
                      }}
                      variant="filled"
                      value={inputTrait.image}
                      textColor="white"
                      placeholder="Link image trait"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    <TextFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewTrait(e, "name");
                      }}
                      variant="filled"
                      value={inputTrait.name}
                      textColor="white"
                      placeholder="Enter Name of Trait"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    <TextFieldComponent
                      color="error"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        inputNewTrait(e, "effect");
                      }}
                      variant="filled"
                      value={inputTrait.effect}
                      textColor="white"
                      placeholder="Enter Effect"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    {inputTrait.unit_activate.map((unit, index) => {
                      return (
                        <UnitInputComponent
                          index={index}
                          inputChangeUnitActivate={inputChangeUnitActivate}
                          unit={unit}
                        />
                      );
                    })}
                    <AddCircleIcon
                      onClick={addMoreUnitTrait}
                      fontSize="small"
                      color="success"
                    />
                  </TableCell>
                  {inputTrait.idEdit !== "SAMPLE" ? (
                    <TableCell align="center">
                      <Button
                        onClick={handleEditTrait}
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
                        onClick={handleAddTrait}
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

              {allTraits.map((trait: ITraitData, index) => {
                if (trait._id === inputTrait.idEdit) {
                  return undefined;
                }
                return (
                  <RowData
                    key={index}
                    index={index}
                    trait={trait}
                    onEditHandler={onEditHandler}
                    handleDeleteTrait={handleDeleteTrait}
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

const renderMenuItem = () => {
  const listOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return listOptions.map((elementMenu) => {
    return <MenuItem value={elementMenu}>{elementMenu}</MenuItem>;
  });
};

const UnitInputComponent = ({ index, inputChangeUnitActivate, unit }: any) => {
  return (
    <Box>
      <Select
        key={index}
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={unit.count_activate}
        label="Age"
        sx={{
          color: "white",
          height: "40px",
          background: "#d32f2f",
          margin: "2px",
        }}
        onChange={(e: any) => {
          inputChangeUnitActivate(e, index, 1);
        }}
      >
        {renderMenuItem()}
      </Select>
      <TextFieldComponent
        color="error"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          inputChangeUnitActivate(e, index, 2);
        }}
        variant="filled"
        value={unit.effect_activate}
        textColor="white"
        placeholder="Link image trait"
      />
    </Box>
  );
};

const RowData = (props: any) => {
  const { index, trait, onEditHandler, handleDeleteTrait } = props;
  console.log("trait in per row", trait);
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <img src={trait.image} width={50} height={50} alt="image" />
      </TableCell>
      <TableCell align="center" sx={tableCellSx}>
        <TextComponent>{trait.name}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={tableCellSx}>
        <TextComponent>{trait.effect}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={tableCellSx}>
        {trait.unit_activate.map((element: IUnitActivate, index: number) => {
          return (
            <TextComponent
              key={index}
              color={"red"}
              sx={{ marginLeft: "4px", marginRight: "4px" }}
            >
              {`(${element.count_activate})   (${element.effect_activate})`}
            </TextComponent>
          );
        })}
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          sx={{ minWidth: 100, marginRight: 2, ...tableCellSx }}
          color="secondary"
          onClick={() => {
            onEditHandler(trait._id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          sx={{ minWidth: 100, ...tableCellSx }}
          color="error"
          onClick={() => {
            handleDeleteTrait(trait._id);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
