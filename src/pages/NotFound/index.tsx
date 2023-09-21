import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";

import PageNotFoundImg from "../../assets/images/404/pageNotFound.png";
import { Link } from "../../components/Link";

export const NotFoundPage = (): JSX.Element => {
  return (
    <PageWrapper className="intro">
      <section className="sec-areatop bg-blue notFound">
        <div className="container">
          <img className="notImg" src={PageNotFoundImg} />
          <span className="tx1">Page not Found</span>
          <div className="tx2">
            We&apos;re sorry,
            <br className="m" /> the page you requested could not be found.
          </div>
          <span className="tx4">Please go back to the homepage.</span>
          <Link to="/">
            <button className="btn">Go back to home</button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
};
