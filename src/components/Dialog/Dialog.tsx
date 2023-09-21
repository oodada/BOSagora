import React from "react";
import { Box, Fade, Modal } from "@mui/material";
import "./Dialog.scss";
import { FormattedMessage } from "react-intl";

interface DialogProp {
  open: boolean;
  closeHandler: Function;
  type: DialogType;
  message: string;
}
export enum DialogType {
  INFO,
  CONFIRM,
  ERROR,
}

export const Dialog: React.FC<DialogProp> = ({
  open,
  closeHandler,
  type,
  message,
}) => {
  const handleClose = () => {
    closeHandler(false);
  };
  const handlerOnConfirm = () => {
    closeHandler(true);
  };

  return (
    <Modal
      className="dialog-field"
      open={open}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Fade in={open}>
        <Box className="dialog-wrap">
          <button onClick={handleClose} className="btn-close">
            close
          </button>
          <div className="dialog-container">
            <div className="dialog-content">
              <p>{message}</p>
            </div>
            <div className="dialog-bar">
              {type === DialogType.CONFIRM && (
                <>
                  <button className="btn-g" onClick={handleClose}>
                    <FormattedMessage defaultMessage="Cancel" />
                  </button>
                  <button className="btn-g blue" onClick={handlerOnConfirm}>
                    <FormattedMessage defaultMessage="Confirm" />
                  </button>
                </>
              )}
              {type === DialogType.INFO && (
                <>
                  <button className="btn-g blue" onClick={handlerOnConfirm}>
                    <FormattedMessage defaultMessage="OK" />
                  </button>
                </>
              )}
              {type === DialogType.ERROR && (
                <>
                  <button className="btn-g blue" onClick={handlerOnConfirm}>
                    <FormattedMessage defaultMessage="OK" />
                  </button>
                </>
              )}
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
