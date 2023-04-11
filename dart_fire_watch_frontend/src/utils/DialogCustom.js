import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function DialogCustom(props) {
    const {isOpen, confirmHandler, cancelHandler, title, content} = props;
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
          <DialogTitle id="alert-dialog-title">
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDisaggree}>Disagree</Button>
            <Button onClick={handleAggree} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }