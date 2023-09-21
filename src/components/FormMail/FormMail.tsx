import request from "../../api/request";
import { TextField } from "@mui/material";
import React, { SetStateAction, useState } from "react";
import _ from "lodash";
import { isEmail as checkEmailValidator } from "../../utils/validator";
import { Dialog, DialogType } from "../Dialog/Dialog";
import { FormattedMessage, useIntl } from "react-intl";

interface FormMailProp {
  setOpen?: Function;
}

export const FormMail: React.FC<FormMailProp> = ({ setOpen }) => {
  const { formatMessage } = useIntl();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [message, setMessage] = useState("");
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isOrg, setIsOrg] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [dialogMsg, setDialogMsg] = useState("");
  const [dialogType, setDialogType] = useState(DialogType.INFO);

  const onChangeName = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
    if (isName) checkValidate();
  };

  const onChangeEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
    if (isEmail) checkValidate();
  };
  const onChangeOrg = (e: { target: { value: SetStateAction<string> } }) => {
    setOrg(e.target.value);
    if (isOrg) checkValidate();
  };
  const onChangeMessage = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(e.target.value);
    if (isMessage) checkValidate();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setOrg("");
    setMessage("");
  };

  const handlerOnClickToMail = () => {
    if (checkValidate()) return;
    sendContact();
  };

  const sendContact = () => {
    request("POST", "/contact", { name, email, org, message })
      .then((res) => {
        if (res.status === 200) {
          resetForm();
          setDialogType(DialogType.INFO);
          setDialogMsg(
            formatMessage({
              defaultMessage:
                "Thank you for registering for the BOSagora. We will contact you after reviewing the information entered by the person in charge within 1-2 business days.",
            })
          );
        } else {
          setDialogType(DialogType.ERROR);
          setDialogMsg(
            formatMessage({
              defaultMessage: "Registration failed.",
            })
          );
        }
      })
      .catch((e) => {
        setDialogType(DialogType.ERROR);
        setDialogMsg(
          formatMessage({
            defaultMessage: "Registration failed.",
          })
        );
      });
    setDialogOpen(true);
  };

  const checkValidate = (): boolean => {
    let flag = false;

    if (_.isEmpty(name)) {
      setIsName(true);
      flag = true;
    } else {
      setIsName(false);
    }
    if (_.isEmpty(email)) {
      setIsEmail(true);
      setEmailHelperText(
        formatMessage({
          defaultMessage: "The email is a required value.",
        })
      );
      flag = true;
    } else if (!checkEmailValidator(email)) {
      setIsEmail(true);
      setEmailHelperText(
        formatMessage({
          defaultMessage: "Please enter a valid email address",
        })
      );
      flag = true;
    } else {
      setIsEmail(false);
    }
    if (_.isEmpty(org)) {
      setIsOrg(true);
      flag = true;
    } else {
      setIsOrg(false);
    }
    if (_.isEmpty(message)) {
      setIsMessage(true);
      flag = true;
    } else {
      setIsMessage(false);
    }
    return flag;
  };

  const handlerDialogClose = () => {
    setDialogOpen(false);
    if (setOpen !== undefined && dialogType === DialogType.INFO) setOpen(false);
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="form-mail">
      <Dialog
        closeHandler={handlerDialogClose}
        message={dialogMsg}
        type={dialogType}
        open={dialogOpen}
      />
      <TextField
        id="outlined-search"
        value={name}
        onChange={onChangeName}
        label="Name"
        type="search"
        fullWidth
        required
        error={isName}
        helperText={
          isName
            ? formatMessage({
                defaultMessage: "The name is a required value.",
              })
            : undefined
        }
      />
      <TextField
        id="outlined-search"
        value={email}
        onChange={onChangeEmail}
        label="Email"
        type="search"
        fullWidth
        required
        error={isEmail}
        helperText={isEmail ? emailHelperText : undefined}
      />
      <TextField
        id="outlined-search"
        value={org}
        onChange={onChangeOrg}
        label="Organization"
        type="search"
        fullWidth
        required
        error={isOrg}
        helperText={
          isOrg
            ? formatMessage({
                defaultMessage: "The organization is a required value.",
              })
            : undefined
        }
      />
      <TextField
        id="outlined-multiline-static"
        value={message}
        onChange={onChangeMessage}
        label="Message"
        type="search"
        fullWidth
        multiline
        required
        error={isMessage}
        minRows={7}
        maxRows={7}
        helperText={
          isMessage
            ? formatMessage({
                defaultMessage: "The message is a required value.",
              })
            : undefined
        }
      />
      <div className="btn-bar">
        <button type="submit" className="btn-g" onClick={handlerOnClickToMail}>
          <FormattedMessage
            defaultMessage="Submit {arrow}"
            values={{
              arrow: (
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              ),
            }}
          />
        </button>
      </div>
    </div>
  );
};
