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
      style={{ display: "block", background: COLOR.BLACK_BACKGROUND }}
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
                  color="secondary"
                  focused
                  value={inputChampion?.avatar}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewChampion(event, "avatar");
                  }}
                  sx={{ m: 1 }}
                />
                <TextField
                  label="Enter name"
                  color="secondary"
                  focused
                  value={inputChampion?.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewChampion(event, "name");
                  }}
                  sx={{ m: 1 }}
                />
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Cost
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    color="secondary"
                    value={inputChampion?.cost}
                    label="Cost"
                    onChange={(event: SelectChangeEvent<any>) => {
                      inputNewChampion(event, "cost");
                    }}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={3}>4</MenuItem>
                    <MenuItem value={3}>5</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Enter skill"
                  color="secondary"
                  focused
                  value={inputChampion?.skill}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewChampion(event, "skill");
                  }}
                  sx={{ m: 1 }}
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
