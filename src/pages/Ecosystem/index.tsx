import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";

import ImgEco from "../../assets/images/sub/img-eco.png";
import ImgEcoM from "../../assets/images/sub/img-eco-m.png";
import EcoStaking from "../../assets/images/sub/img-eco-staking.png";
import EcoBuilding from "../../assets/images/sub/img-eco-building.png";
import { Link } from "../../components/Link";

export const Ecosystem: React.FC = () => {
  return (
    <PageWrapper>
      <section className="sec-areatop">
        <div className="container">
          <div className="subtit-area">
            <span className="co">
              Provides <br />
              easier integration
            </span>
            <h2 className="subtit">Ecosystem</h2>
            <p className="txt">
              Be a part of Real-life Blockchain Platform.
              <br /> The more you use, the more you earn!
            </p>
          </div>
        </div>
      </section>

      <section className="sec-eco">
        <div className="container">
          <picture className="img-eco">
            <img src={ImgEco} className="pc" alt="BOASWAP Ecosystem" />
            <img src={ImgEcoM} className="m" alt="BOASWAP Ecosystem" />
          </picture>
        </div>
      </section>

      <section className="sec-dream">
        <h3 className="sub-tit3">Network of Dream</h3>
        <strong>Network for the most perfect you.</strong>
        <p>
          A space that contains all the possibilities of the space you have been
          thinking about, <br />
          We present a ‘Network of Dream’ that can connect real life and
          blockchain networks. <br />
          BOSagora is based on the philosophy of deliberative democracy and
          technology <br />
          We presents a network connected to the real life that everyone dreams
          of.
        </p>
      </section>
      <section className="sec-start">
        <ul className="lst-start">
          <li>
            <Link to="/Earn">
              <img src={EcoStaking} alt="" />
              <p className="txt">
                <em>Token Holders</em>
                <strong>
                  Start staking{" "}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </strong>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/Developers">
              <img src={EcoBuilding} alt="" />
              <p className="txt">
                <em>Developers</em>
                <strong>
                  Start building{" "}
                  <span className="material-symbols-outlined">
                    arrow_right_alt
                  </span>
                </strong>
              </p>
            </Link>
          </li>
        </ul>
      </section>
    </PageWrapper>
  );
};
