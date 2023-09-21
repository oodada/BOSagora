import React from "react";
import { SubscriptEmail } from "../Subscript/SubscriptEmail";

export const ReceiveNews = () => {
  return (
    <section className="sec-g sec-receivenews bg-gray">
      <div className="container">
        <p className="txt">
          Enter your email address <br />
          to receive news.
        </p>
        <SubscriptEmail />
      </div>
    </section>
  );
};
