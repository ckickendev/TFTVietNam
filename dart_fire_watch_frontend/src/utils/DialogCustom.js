import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export default function DialogCustom({
  isOpen,
  confirmHandler = {},
  cancelHandler = {},
  title,
  content,
  hiddenDisaggree = false,
  hiddenAggree = false,
  disaggreeTitle = "Disaggree",
  aggreeTitle="Aggree"
}) {
  const [open, setOpen] = useState(isOpen);

  const handleAggree = () => {
    setOpen(false);
    confirmHandler();
  };

  const handleDisaggree = () => {
    setOpen(false);
    cancelHandler();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleDisaggree}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {hiddenDisaggree || (
            <Button onClick={handleDisaggree}>{disaggreeTitle}</Button>
          )}
          {hiddenAggree || (
            <Button onClick={handleAggree} autoFocus>
              {aggreeTitle}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
