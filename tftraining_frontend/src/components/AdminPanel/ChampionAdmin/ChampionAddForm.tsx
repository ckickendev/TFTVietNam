import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import { COLOR } from "../../constants";

interface IFormAdd {
  title?: string;
  handleSubmit?: () => void;
  inputNewChampion: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
  inputChampion: any;
  cancelModel?: () => void;
}

export const ChampionAddForm = ({
  title,
  handleSubmit,
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
                    value={inputChampion.avatar}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      inputNewChampion(event, "avatar");
                    }}
                  />
                  <TextField
                    label="Enter name"
                    color="secondary"
                    focused
                    value={inputChampion.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      inputNewChampion(event, "name");
                    }}
                  />
                  <TextField
                    label="Enter cost"
                    color="secondary"
                    focused
                    value={inputChampion.cost}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      inputNewChampion(event, "cost");
                    }}
                  />
                  <TextField
                    label="Enter skill"
                    color="secondary"
                    focused
                    value={inputChampion.skill}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      inputNewChampion(event, "skill");
                    }}
                  />
                </Box>
              </div>
              <div className="modal-footer">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginRight: 1 }}
                  onClick={handleSubmit}
                >
                  Create
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
