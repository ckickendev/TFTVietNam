import {
  Box,
  Button,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { TextFieldComponent } from "../../CommonComponent/TextFieldComponent";
import { TextComponent } from "../../CommonComponent/TextComponent";
import { COLOR } from "../../constants";
import { ADMIN_TABLE_STYLE } from "../style";
import { TraitSkillDetailForm } from "./TraitSkillDetailForm";

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
const tableCellSx = {
  color: COLOR.WHITE,
  fontWeight: 300,
};

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

interface ITraitChampionDetail {
  unableInput: boolean;
  addRowAddTrait: () => void;
  inputNewTrait: (e: any, name: string) => void;
  inputTrait: any;
  inputChangeUnitActivate: (e: any, index: number, param: number) => void;
  addMoreUnitTrait: () => void;
  handleEditTrait: () => void;
  handleAddTrait: () => void;
  allTraits: ITraitData[];
  onEditHandler: (e: any) => void;
  handleDeleteTrait: (id: string) => void;
  handleChangeMenu: () => void;
  cancelInput: () => void;
}

export const TraitSkillDetail = ({
  unableInput,
  addRowAddTrait,
  inputNewTrait,
  inputTrait,
  inputChangeUnitActivate,
  addMoreUnitTrait,
  handleEditTrait,
  handleAddTrait,
  allTraits,
  onEditHandler,
  handleDeleteTrait,
  handleChangeMenu,
  cancelInput,
}: ITraitChampionDetail) => {
  return (
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
            <TableCell sx={ADMIN_TABLE_STYLE.tableCellHeader} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {unableInput && (
            <TraitSkillDetailForm
              title={inputTrait.idEdit ? "Edit trait detail" : "Add new trait"}
              inputTrait={inputTrait}
              inputNewTrait={inputNewTrait}
              addRowAddTrait={addRowAddTrait}
              inputChangeUnitActivate={inputChangeUnitActivate}
              addMoreUnitTrait={addMoreUnitTrait}
              handleEditTrait={handleEditTrait}
              handleAddTrait={handleAddTrait}
              onEditHandler={onEditHandler}
              cancelInput={cancelInput}
            />
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
      <Button variant="contained" color="primary" onClick={addRowAddTrait}>
        Add more trait
      </Button>
      <Button
        variant="contained"
        sx={{ width: "100%", ...tableCellSx, border: 1, marginTop: 4 }}
        color="success"
        onClick={handleChangeMenu}
      >
        Add more champion to trait
      </Button>
    </TableContainer>
  );
};

const RowData = (props: any) => {
  const { index, trait, onEditHandler, handleDeleteTrait } = props;
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">
        <img src={trait.image} width={50} height={50} alt="image" />
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        <TextComponent>{trait.name}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
        <TextComponent>{trait.effect}</TextComponent>
      </TableCell>
      <TableCell align="center" sx={ADMIN_TABLE_STYLE.tableCellSx}>
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
