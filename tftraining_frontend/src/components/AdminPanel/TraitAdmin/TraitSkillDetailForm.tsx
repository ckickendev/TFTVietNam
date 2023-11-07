import React from "react";
import { COLOR } from "../../constants";
import { Box, Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import { TextFieldComponent } from "../../CommonComponent/TextFieldComponent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FORM_STYLE } from "../style";

interface IFormAdd {
  title: string;
  inputTrait: any;
  inputNewTrait: (e: any, name: string) => void;
  addRowAddTrait: () => void;
  inputChangeUnitActivate: (e: any, index: number, param: number) => void;
  addMoreUnitTrait: () => void;
  handleEditTrait: () => void;
  handleAddTrait: () => void;
  onEditHandler: (e: any) => void;
  cancelInput: () => void

}

export const TraitSkillDetailForm = ({
  title,
  inputTrait,
  inputNewTrait,
  addRowAddTrait,
  inputChangeUnitActivate,
  addMoreUnitTrait,
  handleEditTrait,
  handleAddTrait,
  onEditHandler,
  cancelInput
}: IFormAdd) => {
  return (
    <div
      className={`modal fade show d-block"`}
      style={FORM_STYLE.formContainer}
    >
      <div className="modal-dialog modal-simple modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center mb-4">
              <h3 className="mb-2">{title}</h3>
            </div>

            <div className="col-12">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  label="Link image trait"
                  color="error"
                  focused
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewTrait(e, "image");
                  }}
                  value={inputTrait.image}
                  sx={{ m: 4 }}
                  style={FORM_STYLE.formElement}
                />
                <TextField
                  label="Name"
                  color="error"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewTrait(e, "name");
                  }}
                  focused
                  value={inputTrait.name}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <TextField
                  label="Effect"
                  color="error"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewTrait(e, "effect");
                  }}
                  focused
                  multiline
                  rows={4}
                  value={inputTrait.effect}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <Typography sx={{ m: 1 }}>List activate reach</Typography>
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
              </Box>
            </div>
            <div className="modal-footer">
              <Button
                type="submit"
                variant="contained"
                sx={{ marginRight: 1 }}
                onClick={
                  inputTrait?.idEdit == "SAMPLE"
                    ? handleAddTrait
                    : handleEditTrait
                }
              >
                {inputTrait?.idEdit == "SAMPLE" ? "Create" : "Confirm"}
              </Button>
              <Button onClick={cancelInput} variant="contained">Cancel</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    <Box style={FORM_STYLE.formElement}>
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
          padding: "2px"
        }}
        onChange={(e: any) => {
          inputChangeUnitActivate(e, index, 1);
        }}
        style={{ width: "20%" }}
      >
        {renderMenuItem()}
      </Select>
      <TextFieldComponent
        sx={{ p: 2 }}
        color="error"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          inputChangeUnitActivate(e, index, 2);
        }}
        multiline={4}
        variant="filled"
        value={unit.effect_activate}
        textColor={COLOR.BLACK_BACKGROUND}
        placeholder="Skill this activate"
        style={{ width: "80%", padding: "2px" }}
      />
    </Box>
  );
};
