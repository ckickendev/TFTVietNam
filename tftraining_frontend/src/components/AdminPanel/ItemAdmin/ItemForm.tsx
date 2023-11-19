import React from "react";
import { COLOR } from "../../constants";
import { Box, Button, InputLabel, TextField } from "@mui/material";
import { FORM_STYLE } from "../style";

interface IFormAdd {
  title?: string;
  handleSubmit?: () => void;
  handleEditItem?: () => void;
  inputNewItem: (e: any, field: string) => void;
  inputItem: any;
  cancelModel?: () => void;
}

export const ItemForm = ({
  title,
  handleSubmit,
  handleEditItem,
  inputNewItem,
  inputItem,
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
                  label="Link image item"
                  color="success"
                  focused
                  value={inputItem?.image}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewItem(event, "image");
                  }}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <TextField
                  label="Enter name item"
                  color="success"
                  focused
                  value={inputItem?.name}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewItem(event, "name");
                  }}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <TextField
                  label="Enter name api"
                  color="success"
                  focused
                  value={inputItem?.name_api}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewItem(event, "name_api");
                  }}
                  sx={{ m: 1 }}
                  style={FORM_STYLE.formElement}
                />
                <TextField
                  label="Enter effect"
                  color="success"
                  multiline
                  rows={4}
                  focused
                  value={inputItem?.effect}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    inputNewItem(event, "effect");
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
                  inputItem?.idEdit == "SAMPLE" ? handleSubmit : handleEditItem
                }
              >
                {inputItem?.idEdit == "SAMPLE" ? "Create" : "Confirm"}
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
