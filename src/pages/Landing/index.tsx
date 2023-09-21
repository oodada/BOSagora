import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import Lottie from "react-lottie";
import * as animationData from "../../assets/images/intro/Main-final-02.json";

import Slider from "react-slick";

import IntroImg from "../../assets/images/intro/img-intro.png";
import IntroImgM from "../../assets/images/intro/img-intro-m.png";
import IntroWhy from "../../assets/images/intro/intro-why.png";
import IntroWhyM from "../../assets/images/intro/intro-why-m.png";
import IntMem1 from "../../assets/images/intro/membership-img1.jpg";
import IntMem1MD from "../../assets/images/intro/membership-img1-md.jpg";
import IntMem1M from "../../assets/images/intro/membership-img1-m.jpg";
import IntMem2 from "../../assets/images/intro/membership-img2.jpg";
import IntMem2MD from "../../assets/images/intro/membership-img2-md.jpg";
import IntMem2M from "../../assets/images/intro/membership-img2-m.jpg";
import IntMem3 from "../../assets/images/intro/membership-img3.jpg";
import IntMem3MD from "../../assets/images/intro/membership-img3-md.jpg";
import IntMem3M from "../../assets/images/intro/membership-img3-m.jpg";
import IntEco1 from "../../assets/images/intro/ecosystem-img1.jpg";
import IntEco2 from "../../assets/images/intro/ecosystem-img2.jpg";
import IntEco3 from "../../assets/images/intro/ecosystem-img3.jpg";
import IntEco4 from "../../assets/images/intro/ecosystem-img4.jpg";
import IntEco5 from "../../assets/images/intro/ecosystem-img5.jpg";
import IntEco6 from "../../assets/images/intro/ecosystem-img6.jpg";
// import jumboAni from "../../assets/images/intro/Main-final-02.json";
import { FormMail } from "components/FormMail/FormMail";
import { HashLink } from "react-router-hash-link";
import { Link } from "../../components/Link";
// import { render } from "react-dom";

export const Landing: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const settings = {
    arrows: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <PageWrapper className="intro">
      <section className="jumbotron bg-blue">
        <div className="container">
          <div className="tit-wrap">
            <em>
              Build, Vote, and Earn <br />
              Real-life Blockchain <br />
              Platform
            </em>
            <strong>
              BOSagora<span>.</span>
            </strong>
            <p>
              An optimized blockchain platform for integration into real-life.
              <br />
              Various benefits are provided to all Congress Network members
              through <br className="t" /> the platform.
            </p>

            <HashLink to="#membership" smooth className="btn-g end">
              Congress Network{" "}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </HashLink>
          </div>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            isStopped={false}
            isPaused={false}
          />
          <picture className="img-">
            <img src={IntroImg} className="pc" alt="" />
            <img src={IntroImgM} className="m" alt="" />
          </picture>
        </div>
      </section>
      <section className="sec-intwhy">
        <div className="bg-w">
          <div className="tit-wrap">
            <strong className="txt">
              Making <br className="m" /> a better world
              <br className="m" /> with&nbsp;
              <br className="pc" />
              <br className="t" />
              blockchain
              <br className="m" /> technology
            </strong>
          </div>
        </div>
        <picture className="img-intwhy">
          <img
            src={IntroWhy}
            className="pc"
            alt="Real-life Blockchain Platform"
          />
          <img
            src={IntroWhyM}
            className="m"
            alt="Real-life Blockchain Platform"
          />
        </picture>
        <div className="bg-b">
          <div className="container">
            <ul className="lst-intwhy">
              <li>
                <strong>E</strong>
                <em>Environment</em>
                <p>Environmental Movements Platform &#34;Eco Museum&#34;</p>
              </li>
              <li>
                <strong>S</strong>
                <em>Social</em>
                <p>
                  Realizing fair compensation and real-life value connection to
                  ecosystem participants
                </p>
              </li>
              <li>
                <strong>G</strong>
                <em>Governance</em>
                <p>
                  Building a DAO ecosystem through DAO tool and budget support
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="membership" className="sec-membership">
        <div className="container">
          <h2 className="tit-int-type2">
            What are the <br className="pc" /> <b>benefits</b> of Congress
            network?
          </h2>
          <ul className="lst-membership box-over">
            <li>
              <Link to="/Contact">
                <picture className="img-mem">
                  <img src={IntMem1} className="pc" alt="Funding Proposal" />
                  <img src={IntMem1MD} className="md" alt="Funding Proposal" />
                  <img src={IntMem1M} className="m" alt="Funding Proposal" />
                </picture>

                <div className="txt-area">
                  <strong>Funding Proposal</strong>
                  <p>
                    Commons Budget is an asset that accumulates a certain amount
                    of BOA every time a block is created. If this helps the
                    AGORA ecosystem, You must be willing to ask Congress for a
                    funding proposal. We will support the initial cost of your
                    project service.
                  </p>
                  <em>
                    To make proposal{" "}
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </em>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Earn">
                <picture className="img-mem">
                  <img
                    src={IntMem2}
                    className="pc"
                    alt="Block Confirmation Reward"
                  />
                  <img
                    src={IntMem2MD}
                    className="md"
                    alt="Block Confirmation Reward"
                  />
                  <img
                    src={IntMem2M}
                    className="m"
                    alt="Block Confirmation Reward"
                  />
                </picture>
                <div className="txt-area">
                  <strong>Block Confirmation Reward</strong>
                  <p>
                    Confirmation rewards are given to a node when a block is
                    confirmed. This reward is crucial in providing a financial
                    incentive to operate a node.
                  </p>
                  <em>
                    Learn more about Rewards
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </em>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Validator">
                <picture className="img-mem">
                  <img src={IntMem3} className="pc" alt="Become a Validator" />
                  <img
                    src={IntMem3MD}
                    className="md"
                    alt="Become a Validator"
                  />
                  <img src={IntMem3M} className="m" alt="Become a Validator" />
                </picture>
                <div className="txt-area">
                  <strong>Become a Validator </strong>
                  <p>
                    All validators can participate in the collective
                    decision-making process by joining the Congress network. The
                    Congress Network enables its members to participate and
                    contribute through proposals, discussions, voting and review
                    of projects of common interest. For every 40,000 BOA
                    deposit, one validator right is granted.
                  </p>
                  <em>
                    Learn more about Validator
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </em>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec-technology bg-blue p100">
        <h2 className="tit-int-type1">Our technology</h2>
        <strong className="txt">
          Beyond the Platform, <br />
          Making the better world.
        </strong>
        <Link
          to="http://agora-staking.bosagora.org/checklist"
          className="btn-g white"
        >
          Start Staking{" "}
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </Link>
      </section>
      <section className="sec-eco-int bg-w p100">
        <div className="container">
          <h2 className="tit-int-type2">
            <strong>Our Ecosystem </strong>
            that will lead the future.
          </h2>
          <Link to="/Ecosystem" className="btn-g white">
            Learn more about Ecosystem{" "}
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>

          <Slider {...settings}>
            <div>
              <img src={IntEco1} alt="" />
              <strong className="txt">Metacity</strong>
            </div>
            <div>
              <img src={IntEco2} alt="" />
              <strong className="txt">The9 point</strong>
            </div>
            <div>
              <img src={IntEco3} alt="" />
              <strong className="txt">SWAP</strong>
            </div>
            <div>
              <img src={IntEco4} alt="" />
              <strong className="txt">DEFI</strong>
            </div>
            <div>
              <img src={IntEco5} alt="" />
              <strong className="txt">NFT</strong>
            </div>
            <div>
              <img src={IntEco6} alt="" />
              <strong className="txt">Metacity</strong>
            </div>
          </Slider>
        </div>
      </section>
      <section className="sec-mail p100">
        <div className="container">
          <h2 className="tit-int-type2">
            Experience <br />
            success of your project <br />
            with BOSagora!
          </h2>
          <FormMail />
        </div>
      </section>
      <section className="sec-buy">
        <div className="wrap-buy">
          <div className="container">
            <ul className="lst-buy">
              <li>
                <a href="#!">
                  <span className="img-g buy1">Gate.io</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="img-g buy2">LATOKEN</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="img-g buy3">bithumb</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="img-g buy4">KUCOIN</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="img-g buy5">BITGLOBAL</span>
                </a>
              </li>
              <li>
                <a href="#!">
                  <span className="img-g buy6">ZT Global</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
