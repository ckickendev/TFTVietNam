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
import { ADMIN_TABLE_STYLE } from "../style";
import { COLOR, SIZE } from "../../constants";
import { TraitChampionListInTraitForm } from "./TraitChampionListInTraitForm";
import { CustomIconTraitComponent } from "../../CommonComponent/CustomIconTraitComponent";

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

export const TraitChampionAdmin = ({ handleChangeMenu }: any) => {
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
  const [inputListTraitChampion, setInputListTraitChampion] = useState({
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
  const [deleteTrait, setDeleteTrait] = useState("");

  const onCloseDialogHandler = async () => {
    setErrorAddTraitChampion((state) => {
      return { error: "", isError: !state.error };
    });
  };

  const onEditHandler = (idEdit: string) => {
    setInputListTraitChampion((oldInputTrait: any) => {
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

  const handleDeleteTrait = () => { };

  const inputChangeTraitChampion = (e: any, position: number) => {
    setInputListTraitChampion((oldTrait: any) => {
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
    setInputListTraitChampion((oldTrait: any) => {
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
        inputListTraitChampion.idEdit,
        inputListTraitChampion.champions
      );
      setAllTraits((allTraits: any) => {
        console.log("Before set all trait", allTraits);

        const newAllTrait = allTraits.map((trait: any) => {
          console.log("input trait champion", trait);
          if (trait._id === inputListTraitChampion.idEdit) {
            return { ...trait, champions: inputListTraitChampion.champions };
          }
          return trait;
        });
        console.log("After set all trait", newAllTrait);

        return newAllTrait;
      });
      setInputListTraitChampion({
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

  const onChangeInputStatus = () => {
    setUnableInput(!unableInput);
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
        <TableContainer sx={ADMIN_TABLE_STYLE.tableContainer}>
          <TextComponent sx={tableCellSx}>No data found</TextComponent>
          <Button
            onClick={handleChangeMenu}
            variant="contained"
            sx={{ width: "100%", ...tableCellSx, border: 1, marginTop: 4 }}
            color="success"
          >
            Switch to detail trait
          </Button>
        </TableContainer>
      ) : (
        <TableContainer sx={ADMIN_TABLE_STYLE.tableContainer}>
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
              {unableInput && (
                <TraitChampionListInTraitForm
                  title="Change champion in the list trait"
                  handleSubmit={confirmHandlerAddChampions}
                  data={inputListTraitChampion}
                  inputChangeTraitChampion={inputChangeTraitChampion}
                  cancelModel={onChangeInputStatus}
                  allChampions={allChampions}
                  addMoreChampion={addMoreChampion}
                />
              )}

              {allTraits.map((trait: ITraitData, index) => {
                return (
                  <RowData
                    key={index}
                    index={index}
                    trait={trait}
                    onEditHandler={onEditHandler}
                    handleDeleteTrait={handleDeleteTrait}
                    setDeleteTrait={setDeleteTrait}
                  />
                );
              })}
            </TableBody>
          </Table>
          <Button
            onClick={handleChangeMenu}
            variant="contained"
            sx={{ width: "100%", ...tableCellSx, border: 1, marginTop: 4 }}
            color="success"
          >
            Switch to detail trait
          </Button>
        </TableContainer>
      )}
    </>
  );
};

const RowData = (props: any) => {
  const { index, trait, onEditHandler, setDeleteTrait } = props;
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <CustomIconTraitComponent src={trait.image} width={SIZE.WIDTH_ICON} height={SIZE.HEIGHT_ICON} />
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        <TextComponent>{trait.name}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        {trait.champions?.length === 0 ? (
          <TextComponent>No Champions</TextComponent>
        ) : (
          trait.champions?.map((champion: IChampionData, index: number) => {
            return (
              <div className="mt-4" key={index}>
                <img src={champion.avatar} width={50} height={50} />
                <TextComponent key={index}>{champion.name}</TextComponent>
              </div>
            );
          })
        )}
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
            onEditHandler(trait._id);
          }}
        >
          Edit list champion
        </Button>
      </TableCell>
    </TableRow>
  );
};
