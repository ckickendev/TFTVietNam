import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface IDialogCustome {
  isOpen: boolean;
  confirmHandler?: () => void;
  cancelHandler?: () => void;
  onClose?: () => void;
  title: string;
  content: string;
  displayDisaggree?: boolean;
  displayAggree?: boolean;
  disaggreeTitle?: string;
  aggreeTitle?: string;
}

const DialogCustom = ({
  isOpen,
  confirmHandler,
  cancelHandler,
  title = "Some error is occur",
  content = "Please check again",
  displayDisaggree = true,
  displayAggree = true,
  disaggreeTitle = "Disaggree",
  aggreeTitle = "Aggree",
  onClose,
}: IDialogCustome) => {
  const handleAggree = () => {
    confirmHandler && confirmHandler();
  };

  const handleDisaggree = () => {
    cancelHandler && cancelHandler();
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textAlign: "center" }}
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className="">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {displayDisaggree && (
            <Button variant="contained" color="primary" onClick={handleDisaggree}>{disaggreeTitle}</Button>
          )}
          {displayAggree && (
            <Button variant="contained" color="warning" onClick={handleAggree} autoFocus>
              {aggreeTitle}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogCustom;
