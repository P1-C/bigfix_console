import React, { useEffect } from "react";
import useNotificationStore from "../stores/notificationStore";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Slide, Snackbar } from "@mui/material";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Notifier() {
  const { display, hideNotification, message, showNotification } =
    useNotificationStore();
  const closeAction = (
    <React.Fragment>
      <IconButton
        sx={{ marginRight: "10px" }}
        size="medium"
        aria-label="close"
        color="inherit"
        onClick={hideNotification}
      >
        <CloseIcon fontSize="medium" />
      </IconButton>
    </React.Fragment>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      showNotification("Welcome to BigFIx Console");
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [ ]);
  return (
    <Snackbar
      sx={{
        opacity: "80%",
        margin: "-25px",
        "& .MuiSnackbarContent-root": {
          minWidth: "100vw",
          backdropFilter: "blur('10px')",
          background: "rgba(255, 255, 255, 0.1)",
        },
      }}
      open={display}
      onClose={hideNotification}
      autoHideDuration={3000}
      TransitionComponent={TransitionUp}
      message={message}
      key={TransitionUp.name}
      action={closeAction}
    />
  );
}

export default Notifier;
