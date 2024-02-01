import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export type msgFunc = (msg: string) => void;
// type ToastIcon = React.ReactNode | (() => React.ReactNode);

export const toastWarnNotify: msgFunc = (msg) => {
  toast.warn(msg, {
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-center",
    draggablePercent: 60,
    theme: "colored",
  });
};
//! ICON !!!
export const toastSuccessNotify: msgFunc = (msg) => {
  toast.success(msg, {
    icon: (
      <span role="img" aria-label="rocket">
        🚀
      </span>
    ),
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    position: "top-center",
    draggablePercent: 60,
    theme: "light",
    progressStyle: {
      background: "#00345b",
      height: "5px",
    },
  });
};

