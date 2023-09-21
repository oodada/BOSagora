import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { messages, AppLanguage, supportedLanguages } from "../intl";

interface Props {
  history: any;
  children: any;
}

export const LocalizedRouter: React.FC<Props> = ({ children, history }) => (
  <Router history={history}>
    <Route path="/:lang([a-z-]{2,5})">
      {({ match, location }) => {
        /**
         * Get current language
         * Set default locale to en if base path is used without a language
         */
        const defaultLang = localStorage.getItem("locale");
        const params = match
          ? match.params
          : { lang: defaultLang ?? AppLanguage.English };
        const { lang } = params;

        /**
         * If language provided is not supported, redirect to "languages" page
         */
        if (supportedLanguages.indexOf(lang) < 0) {
          if (!defaultLang) {
            localStorage.setItem("locale", AppLanguage.English);
          }
          return <Redirect push to={"/en"} />;
        } else {
          if (!defaultLang || defaultLang !== lang) {
            localStorage.setItem("locale", lang);
          }
        }

        /**
         * If language is not in route path, redirect to language route
         */
        const { pathname } = location;
        if (!pathname.includes(`/${lang}/`) && pathname !== `/${lang}`) {
          console.log("Router redirect");
          return <Redirect to={`/${lang}${pathname}`} />;
        }

        /**
         * Return Intl provider with default language set
         */
        return (
          <IntlProvider locale={lang} messages={messages[lang]}>
            {children}
          </IntlProvider>
        );
      }}
    </Route>
  </Router>
);
