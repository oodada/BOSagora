import { CircularProgress, TextField } from "@mui/material";
import React, { SetStateAction, useState } from "react";
import { useIntl } from "react-intl";
import { Dialog, DialogType } from "../Dialog/Dialog";
import _ from "lodash";
import { isEmail as checkEmailValidator } from "../../utils/validator";
import request from "../../api/request";

export const SubscriptEmail: React.FC = () => {
  const { formatMessage } = useIntl();
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [dialogMsg, setDialogMsg] = useState("");
  const [dialogType, setDialogType] = useState(DialogType.INFO);
  const [dialogOpen, setDialogOpen] = useState(false);

  const onChangeEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
    if (isErrorEmail) checkValidate();
  };

  const checkValidate = () => {
    if (_.isEmpty(email)) {
      setIsErrorEmail(true);
      setEmailHelperText(
        formatMessage({
          defaultMessage: "The email is a required value.",
        })
      );
      return true;
    } else if (!checkEmailValidator(email)) {
      setIsErrorEmail(true);
      setEmailHelperText(
        formatMessage({
          defaultMessage: "Please enter a valid email address",
        })
      );
      return true;
    } else {
      setIsErrorEmail(false);
    }
    return false;
  };

  const handlerOnClickSubscribe = () => {
    if (checkValidate()) return;
    sendSubscript();
  };

  const sendSubscript = () => {
    setSending(true);
    request("POST", "/subscription", { email })
      .then((res: any) => {
        console.log("Success", res);
        if (res.status === 200) {
          setEmail("");
          setDialogType(DialogType.INFO);
          setDialogMsg(
            formatMessage({
              defaultMessage:
                "You're In! Thanks for subscribing to BOSagora Newsletter!",
            })
          );
        } else {
          setDialogType(DialogType.ERROR);
          setDialogMsg(
            formatMessage({
              defaultMessage: "Email subscription failed.",
            })
          );
        }
      })
      .catch((e: any) => {
        setDialogType(DialogType.ERROR);
        setDialogMsg(
          formatMessage({
            defaultMessage: "Email subscription failed.",
          })
        );
      })
      .finally(() => {
        setSending(false);
        setDialogOpen(true);
      });
  };

  const handlerDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Dialog
        closeHandler={handlerDialogClose}
        message={dialogMsg}
        type={dialogType}
        open={dialogOpen}
      />
      <div className="input-email">
        <div className="search-area">
          <TextField
            id="outlined-search"
            value={email}
            onChange={onChangeEmail}
            label="Email"
            type="search"
            required
            error={isErrorEmail}
            helperText={isErrorEmail ? emailHelperText : undefined}
          />
          <button
            className="btn"
            title="submit"
            onClick={handlerOnClickSubscribe}
          >
            {sending ? <CircularProgress size={25} /> : "Subscribe"}
          </button>
        </div>
      </div>
    </>
  );
};
