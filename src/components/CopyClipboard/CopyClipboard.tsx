import React from "react";
import Button from "@mui/material/Button";
import { ContentCopy } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import useCopyClipboard from "../../hooks/useCopyClipboard";
import { FormattedMessage, useIntl } from "react-intl";

interface CopyClipboardProp {
  text: string;
  toCopy?: string;
}
export const CopyClipboard: React.FC<CopyClipboardProp> = ({
  text,
  toCopy,
}) => {
  const [isCopied, setCopied] = useCopyClipboard();
  const { formatMessage } = useIntl();
  return (
    <Tooltip
      title={
        isCopied
          ? formatMessage({ defaultMessage: "Copied" })
          : formatMessage({ defaultMessage: "Click to copy to Clipboard." })
      }
      arrow
      placement="top"
    >
      <Button onClick={() => setCopied(toCopy ? toCopy : text)}>
        {isCopied ? (
          <span style={{ marginLeft: "4px" }}>
            <FormattedMessage defaultMessage="Copied" />
          </span>
        ) : (
          <>
            {text}
            <ContentCopy />
          </>
        )}
      </Button>
    </Tooltip>
  );
};
