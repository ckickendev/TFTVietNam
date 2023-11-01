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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { TextFieldComponent } from "../../CommonComponent/TextFieldComponent";
import { TextComponent } from "../../CommonComponent/TextComponent";
import { COLOR } from "../../constants";
import { ADMIN_TABLE_STYLE } from "../style";

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
  inputChangeUnitActivate: (e: any, index:number, param: number) => void;
  addMoreUnitTrait: () => void;
  handleEditTrait: () => void;
  handleAddTrait: () => void;
  allTraits: ITraitData[];
  onEditHandler: (e:any) => void;
  handleDeleteTrait: (id: string) => void;
  handleChangeMenu: () => void
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
  handleChangeMenu
}: ITraitChampionDetail) => {
  return (
    <TableContainer sx={ADMIN_TABLE_STYLE.tableContainer}>
      <Table aria-label="customized table"
      sx={{ backgroundColor: COLOR.WHITE, marginBottom: 4 }}>
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
                {inputTrait.unit_activate.map((unit: any, index: any) => {
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
      <Button onClick={handleChangeMenu}>Change</Button>
    </TableContainer>
  );
};

const UnitInputComponent = ({ index, inputChangeUnitActivate, unit }: any) => {
  const renderMenuItem = () => {
    const listOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return listOptions.map((elementMenu) => {
      return <MenuItem value={elementMenu}>{elementMenu}</MenuItem>;
    });
  };

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
        placeholder="Skill this activate"
      />
    </Box>
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
