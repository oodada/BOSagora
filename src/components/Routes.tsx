import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch, withRouter } from "react-router-dom";
import { useIntl } from "react-intl";
import { supportedLanguages } from "intl";
import ScrollToTop from "utils/ScrollToTop";
import { Landing } from "../pages/Landing";
import { Ecosystem } from "../pages/Ecosystem";
import { Developers } from "../pages/Developers";
import { Agorachain } from "../pages/Developers/Agorachain";
import { Tools } from "../pages/Developers/Tools";
import { Validator } from "../pages/Validator";
import { Earn } from "../pages/Earn";
import { Community } from "../pages/Community";
import { Newsview } from "../pages/Community/Newsview";
import { Socials } from "../pages/Community/Socials";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { AnimateTest } from "../pages/Test/AnimateTest";
import { NotFoundPage } from "../pages/NotFound";

type RouteType = {
  path: string;
  component: FunctionComponent;
  exact?: boolean;
};

export enum routesEnum {
  ecoSystemPage = "/ecosystem",
  developersPage = "/developers",
  agorachainPage = "/developers/Agorachain",
  toolsPage = "/developers/Tools",
  validatorPage = "/Validator",
  earnPage = "/Earn",
  communityPage = "/community",
  newsViewPage = "/community/Newsview",
  socialsPage = "/community/Socials",
  aboutPage = "/about",
  contactClient = "/contact",
  testPage = "/test",
  landingPage = "/",
  notFoundPage = "/*",
}
const routes: RouteType[] = [
  { path: routesEnum.ecoSystemPage, exact: true, component: Ecosystem },
  { path: routesEnum.developersPage, exact: true, component: Developers },
  { path: routesEnum.agorachainPage, exact: true, component: Agorachain },
  { path: routesEnum.toolsPage, exact: true, component: Tools },
  { path: routesEnum.validatorPage, exact: true, component: Validator },
  { path: routesEnum.earnPage, exact: true, component: Earn },
  { path: routesEnum.communityPage, exact: true, component: Community },
  { path: routesEnum.newsViewPage, exact: true, component: Newsview },
  { path: routesEnum.socialsPage, exact: true, component: Socials },
  { path: routesEnum.aboutPage, exact: true, component: About },
  { path: routesEnum.contactClient, exact: true, component: Contact },
  { path: routesEnum.testPage, exact: true, component: AnimateTest },
  // NOTE: this wildcard route must be the last index of the routes array
  { path: routesEnum.landingPage, exact: true, component: Landing },
  { path: routesEnum.notFoundPage, component: NotFoundPage },
];

const localizeRoutes = (locale: String, routes: RouteType[]) => {
  return routes.map((route) => {
    const languagePath = route.path.split("/")[1];
    const routeHasLangPath = supportedLanguages.includes(languagePath);
    if (routeHasLangPath || route.path === "/*") {
      return route;
    }
    const localizedRoute: RouteType = {
      path: `/${locale}${route.path}`,
      exact: route.exact,
      component: route.component,
    };
    return localizedRoute;
  });
};

const _Routes = () => {
  const { locale, formatMessage } = useIntl();
  const localizedRoutes = localizeRoutes(locale, routes);

  const title = formatMessage({ defaultMessage: "BOSAGORA" });
  const description = formatMessage({
    defaultMessage: "BOSAGORA, a project enabler.",
  });
  return (
    <>
      <ScrollToTop>
        <Helmet>
          <html lang={locale} />
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Switch>
          {localizedRoutes.map((route: RouteType) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          ))}
        </Switch>
      </ScrollToTop>
    </>
  );
};

export const Routes = withRouter(_Routes);
