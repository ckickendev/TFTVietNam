import "./loading.scss";
import { Backdrop, CircularProgress } from "@mui/material";

interface ILoadingCustome {
  opacity?: number,
  sx?: object,
  handleClick? : () => void
  isOpen: boolean
} 

export const LoadingCustom = (props: ILoadingCustome) => {
  const opacity = props.opacity || 1;
  return (
    <Backdrop
      sx={{ ...props.sx , color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.isOpen}
      onClick={props.handleClick}
      style={{ opacity: opacity }}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
