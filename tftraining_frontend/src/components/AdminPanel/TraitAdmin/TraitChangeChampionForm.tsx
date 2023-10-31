import React from "react";
import { COLOR } from "../../constants";
import { Box, Button, TextField } from "@mui/material";

interface IFormAdd {
  title?: string;
  handleSubmit?: () => void;
  handleEditTrait?: () => void;
  inputNewTrait: (e: any, field: string) => void;
  inputTrait: any;
  cancelModel?: () => void;
}

export const TraitChangeChampionForm = ({
  title,
  handleSubmit,
  handleEditTrait,
  inputNewTrait,
  inputTrait,
  cancelModel,
}: IFormAdd) => {
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
                label="Link image item"
                color="success"
                focused
                value={inputTrait?.image}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  inputNewTrait(event, "image");
                }}
                sx={{ m: 1 }}
              />
              <TextField
                label="Enter name item"
                color="success"
                focused
                value={inputTrait?.name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  inputNewTrait(event, "name");
                }}
                sx={{ m: 1 }}
              />
              <TextField
                label="Enter effect"
                color="success"
                multiline
                rows={4}
                focused
                value={inputTrait?.effect}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  inputNewTrait(event, "effect");
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
                inputTrait?.idEdit == "SAMPLE" ? handleSubmit : handleEditTrait
              }
            >
              {inputTrait?.idEdit == "SAMPLE" ? "Create" : "Confirm"}
            </Button>
            <Button variant="contained" onClick={cancelModel}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};
