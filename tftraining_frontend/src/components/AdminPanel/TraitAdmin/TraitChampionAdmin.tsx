import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useEffect, useState } from "react";
import loadingStore from "../../../store/loadingStore";
import DialogCustom from "../../../utils/DialogCustom";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TextComponent } from "../../CommonComponent/TextComponent";
import { IChampionData } from "../ChampionAdmin/ChampionAdmin";
import { ITraitData } from "./TraitAdmin";
import { getAllChampionAPI } from "../../../api/championApi";
import { changeTraitChampion, getAllTraitsAPI } from "../../../api/traitAPI";

interface Column {
  id: "image" | "champions" | "name";
  label: string;
  align?: "right" | "center" | "left" | "inherit" | "justify" | undefined;
}
const columns: readonly Column[] = [
  { id: "image", label: "Image", align: "center" },
  { id: "name", label: "Name", align: "center" },
  { id: "champions", label: "List Champion", align: "center" },
];

const tableCellSx = {
  color: "white",
  fontWeight: 300,
};

export const TraitChampionAdmin = () => {
  useEffect(() => {
    const getAllDatas = async () => {
      loadingStore.setIsLoading(true);
      const champions = await getAllChampionAPI();
      const traits = await getAllTraitsAPI();
      setAllTraits(traits.data.allTraits);
      setAllChampions(champions.data.allChampions);
      loadingStore.setIsLoading(false);
    };
    getAllDatas();
  }, []);

  const [allTraits, setAllTraits] = useState([]);
  const [allChampions, setAllChampions] = useState([]);
  const [inputTraitChampion, setInputTraitChampion] = useState({
    idEdit: "SAMPLE",
    image: "",
    name: "",
    champions: [],
  });
  const [errorAddTraitChampion, setErrorAddTraitChampion] = useState({
    error: "",
    isError: false,
  });
  const [unableInput, setUnableInput] = useState(false);

  const onCloseDialogHandler = async () => {
    setErrorAddTraitChampion((state) => {
      return { error: "", isError: !state.error };
    });
  };

  const onEditHandler = (idEdit: string) => {
    setInputTraitChampion((oldInputTrait: any) => {
      const championsList: any = allTraits.filter((trait: any) => {
        return trait._id === idEdit;
      });
      return {
        idEdit: idEdit,
        image: championsList[0].image,
        name: championsList[0].name,
        champions: championsList[0].champions || [],
      };
    });
    setUnableInput(true);
  };

  const handleDeleteTrait = () => {};

  const inputChangeTraitChampion = (e: any, position: number) => {
    setInputTraitChampion((oldTrait: any) => {
      let newListChampions = oldTrait.champions.map(
        (champion: any, index: number) => {
          if (index === position) {
            let championReturn;
            allChampions.forEach((championElement: any) => {
              if (championElement._id === e.target.value) {
                championReturn = championElement;
              }
            });

            return championReturn;
          }
          return champion;
        }
      );
      return {
        ...oldTrait,
        champions: newListChampions,
      };
    });
  };

  const addMoreChampion = () => {
    setInputTraitChampion((oldTrait: any) => {
      let newListChampions = [];
      if (oldTrait?.champions) {
        newListChampions = [...oldTrait.champions, ""];
      } else {
        newListChampions = [""];
      }
      return {
        ...oldTrait,
        champions: newListChampions,
      };
    });
  };

  const confirmHandlerAddChampions = async () => {
    try {
      const dataResponse = await changeTraitChampion(
        inputTraitChampion.idEdit,
        inputTraitChampion.champions
      );
      setAllTraits((allTraits: any) => {
        console.log("Before set all trait", allTraits);

        const newAllTrait = allTraits.map((trait: any) => {
          console.log("input trait champion", trait);
          if (trait._id === inputTraitChampion.idEdit) {
            return { ...trait, champions: inputTraitChampion.champions };
          }
          return trait;
        });
        console.log("After set all trait", newAllTrait);

        return newAllTrait;
      });
      setInputTraitChampion({
        idEdit: "SAMPLE",
        image: "",
        name: "",
        champions: [],
      });
      setUnableInput(false);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <>
      {errorAddTraitChampion.isError && (
        <DialogCustom
          onClose={onCloseDialogHandler}
          isOpen={errorAddTraitChampion.isError}
          title={errorAddTraitChampion.error}
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
              {unableInput && (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <img
                      src={inputTraitChampion.image}
                      width={50}
                      height={50}
                      alt="image"
                    />
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    <TextComponent>{inputTraitChampion.name}</TextComponent>
                  </TableCell>
                  <TableCell align="center" sx={tableCellSx}>
                    {inputTraitChampion.champions?.length === 0 ? (
                      <TextComponent>No Champions</TextComponent>
                    ) : (
                      inputTraitChampion.champions.map(
                        (champion: any, index) => {
                          return (
                            <ChampionSelectComponent
                              inputChangeTraitChampion={
                                inputChangeTraitChampion
                              }
                              champion={champion}
                              key={index}
                              index={index}
                              allChampions={allChampions}
                            />
                          );
                        }
                      )
                    )}

                    <AddCircleIcon onClick={addMoreChampion} />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      sx={{ minWidth: 100, marginRight: 2, ...tableCellSx }}
                      color="secondary"
                      onClick={confirmHandlerAddChampions}
                    >
                      Confirm
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ minWidth: 100, ...tableCellSx }}
                      color="error"
                      onClick={() => {}}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )}

              {allTraits.map((trait: ITraitData, index) => {
                if (trait._id === inputTraitChampion.idEdit) {
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

const ChampionSelectComponent = ({
  index,
  inputChangeTraitChampion,
  champion,
  allChampions,
}: any) => {
  return (
    <Box margin={2}>
      <Select
        key={index}
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        label="Champion"
        sx={{
          color: "white",
          height: "40px",
          background: "#d32f2f",
          display: "flex",
          "& .MuiSelect-select": {
            display: "flex",
            justifyContent: "space-evenly",
            "& p": {
              lineHeight: "50px",
            },
          },
        }}
        onChange={(e: any) => {
          console.log("e in inputChangeTraitChampion", e.target.value);

          inputChangeTraitChampion(e, index);
        }}
        value={champion._id}
      >
        {allChampions.map((championElement: any, index: number) => {
          return (
            <MenuItem
              key={index}
              value={championElement._id}
              sx={{ display: "flex" }}
            >
              <img
                src={championElement.avatar}
                width={50}
                height={50}
                alt="image"
                style={{ padding: 8 }}
              />
              <TextComponent>{championElement.name}</TextComponent>
            </MenuItem>
          );
        })}
      </Select>
    </Box>
  );
};

const RowData = (props: any) => {
  const { index, trait, onEditHandler, handleDeleteItem } = props;
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
        {trait.champions?.length === 0 ? (
          <TextComponent>No Champions</TextComponent>
        ) : (
          trait.champions?.map((champion: IChampionData, index: number) => {
            return (
              <div className="mt-4" key={index}>
                <img src={champion.avatar} />
                <TextComponent key={index}>{champion.name}</TextComponent>
              </div>
            );
          })
        )}
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
            handleDeleteItem(trait._id);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
