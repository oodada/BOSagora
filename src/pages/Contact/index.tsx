import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { FormMail } from "components/FormMail/FormMail";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  // bgcolor: "#f5f4f6",
  boxShadow: 24,
  p: 10,
};

export const Contact: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <PageWrapper>
      <section className="sec-areatop contact">
        <div className="container">
          <div className="subtit-area">
            <h2 className="subtit">CONTACT</h2>
            <p className="txt">Get in touch with the BOSagora team.</p>
          </div>
        </div>
      </section>

      <section className="sec-contact">
        <div className="container">
          <ul className="lst-contact box-over">
            <li>
              <Button onClick={handleOpen} className="link-contact">
                <span className="img-g general"></span>
                <strong>General Inquiries</strong>
                <p>
                  Are you looking for the BOSagora support?
                  <br />
                  Fill out the form with your questions or inquiries here.
                </p>
                <em className="contact">
                  <span className="m">
                    Contact us{" "}
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </span>
                </em>
              </Button>
            </li>
            <li>
              <Button onClick={handleOpen} className="link-contact">
                <span className="img-g partner"></span>
                <strong>Partnerships</strong>
                <p>
                  Be a part of the BOSagora ecosystem.
                  <br />
                  We can help you get the most out of our ecosystem.
                </p>
                <em className="contact">
                  <span className="m">
                    Contact us{" "}
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </span>
                </em>
              </Button>
            </li>
          </ul>
        </div>
      </section>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className="modal-field"
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="tit-wrap">
              <strong id="transition-modal-title">
                The easiest <br />
                way to Funding
              </strong>
              <p>
                We&apos;d love to hear from you <br />
                the most of our ecosystem for you.
              </p>
            </div>
            <FormMail setOpen={setOpen} />
            <button onClick={handleClose} className="btn-close">
              close
            </button>
          </Box>
        </Fade>
      </Modal>
    </PageWrapper>
  );
};
