import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import { COLOR } from "../../constants";
import { FORM_STYLE } from "../style";

interface IFormAdd {
  title?: string;
  handleSubmit?: () => void;
  handleEditChampion?: () => void;
  inputNewChampion: (e: any, field: string) => void;
  inputChampion: any;
  cancelModel?: () => void;
}

export const ChampionAddForm = ({
  title,
  handleSubmit,
  handleEditChampion,
  inputNewChampion,
  inputChampion,
  cancelModel,
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
              <h3 className="mb-2">{title ? title : "Form"}</h3>
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
                  label="Link image avatar"
                  color="success"
                  focused
                  defaultValue={inputChampion?.avatar}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewChampion(event, "avatar");
                  }}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <TextField
                  label="Link background avatar"
                  color="success"
                  focused
                  defaultValue={inputChampion?.bgimage}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewChampion(event, "bgimage");
                  }}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <TextField
                  label="Enter name"
                  color="success"
                  focused
                  defaultValue={inputChampion?.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewChampion(event, "name");
                  }}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <TextField
                  label="Enter name api"
                  color="success"
                  focused
                  defaultValue={inputChampion?.name_api}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewChampion(event, "name_api");
                  }}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <FormControl fullWidth sx={{ m: 1 }} 
                  style={FORM_STYLE.formElement}
                  >
                  <InputLabel id="demo-simple-select-helper-label">
                    Cost
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    color="success"
                    defaultValue={inputChampion?.cost}
                    label="Cost"
                    onChange={(event: SelectChangeEvent<any>) => {
                      inputNewChampion(event, "cost");
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Enter skill"
                  color="success"
                  focused
                  multiline
                  rows={4}
                  defaultValue={inputChampion?.skill}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewChampion(event, "skill");
                  }}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
              </Box>
            </div>
            <div className="modal-footer">
              <Button
                type="submit"
                variant="contained"
                sx={{ marginRight: 1 }}
                onClick={
                  inputChampion?.idEdit == "SAMPLE"
                    ? handleSubmit
                    : handleEditChampion
                }
              >
                {inputChampion?.idEdit == "SAMPLE" ? "Create" : "Confirm"}
              </Button>
              <Button variant="contained" onClick={cancelModel}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
