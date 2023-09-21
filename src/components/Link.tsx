import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useIntl } from "react-intl";
import { HashLink } from "react-router-hash-link";

import { supportedLanguages } from "../intl";

interface LinkProps {
  to: string;
  key?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (param?: any) => void;
  newTab?: boolean;
}

export const Link = (props: LinkProps) => {
  const { children, className, to, newTab } = props;
  const { locale } = useIntl();
  const isExternal = to && to.includes("http");
  const BOSAGORA_DOC_ORG = `https://docs.bosagora.org`;
  const isHash = Boolean(to.indexOf("#") > 0);

  if (isExternal) {
    let href = to;
    if (to.includes(BOSAGORA_DOC_ORG)) {
      const docSplit = to.split("/");
      const isLocale = supportedLanguages.includes(docSplit[3]);
      href = isLocale
        ? to
        : `${BOSAGORA_DOC_ORG}/${locale === "ko" ? "kr" : locale}/${docSplit
            .slice(3)
            .join("/")}`;
    }
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Add language path if not already present
  const firstPath = to.split("/")[1];

  const langPath = supportedLanguages.includes(firstPath)
    ? to
    : `/${locale}${to}`;
  if (isHash) {
    return (
      <HashLink smooth {...props} to={langPath}>
        {children}
      </HashLink>
    );
  }
  return (
    <RouterLink
      target={newTab ? "_blank" : "_self"}
      className={className}
      {...props}
      to={langPath}
    >
      {children}
    </RouterLink>
  );
};
