import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import ImgWhy from "../../assets/images/sub/img-why.png";
import ImgWhyM from "../../assets/images/sub/img-why-m.png";
import ImgWhyblog from "../../assets/images/sub/img-why-blog.jpg";
import ImgWhyfun1 from "../../assets/images/sub/img-why-foun1.jpg";
import ImgWhyfun1M from "../../assets/images/sub/img-why-foun1-m.jpg";
import ImgWhyfun2 from "../../assets/images/sub/img-why-foun2.jpg";
import ImgWhyfun2M from "../../assets/images/sub/img-why-foun2-m.jpg";
import ImgWhyfun3 from "../../assets/images/sub/img-why-foun3.jpg";
import ImgWhyfun3M from "../../assets/images/sub/img-why-foun3-m.jpg";
import ImgCi from "../../assets/images/sub/img-ci.png";
import ImgCiM from "../../assets/images/sub/img-ci-m.jpg";

export const About: React.FC = () => {
  return (
    <PageWrapper>
      <section className="sec-areatop about">
        <div className="container">
          <div className="subtit-area">
            <span className="co">About us</span>
            <h2 className="subtit">BOSagora</h2>
            <p className="txt">
              BOSagora contains the vision of BOSagora to realize the birth of a
              true democracy <br className="pc" />
              <br className="t" />
              by combining the words “BOS”, which represents the basic operating
              system of a computer, <br className="pc" />
              <br className="t" />
              and “AGORA”, which symbolizes direct democracy.
            </p>
          </div>
          <div className="btn-area">
            <a
              href="/files/BOSAGORA_Whitepaper_EN_Nov_2022.pdf"
              className="btn-g download white m1"
              target="_blank"
            >
              <em>WhitePaper</em> English version
              <span className="material-symbols-outlined">download</span>
            </a>
            <a
              href="/files/BOSAGORA_Whitepaper_KR_Nov_2022.pdf"
              className="btn-g download white m2"
              target="_blank"
            >
              <em>WhitePaper</em> Korean version{" "}
              <span className="material-symbols-outlined">download</span>
            </a>
          </div>
        </div>
      </section>
      <section className="sec-why bg-w">
        <div className="container">
          <ul className="lst-why">
            <li>
              <h3 className="sub-tit3-s">Our mission</h3>
              <strong>
                Making a better world <br className="pc" />
                with Blockchain technology <br className="pc" />
                as a project enabler.
              </strong>
              <p>
                Building an open decentralized blockchain protocol that ensures{" "}
                <br className="pc" />
                transparency of the consensus algorithm and the clarity of
                contracts, <br className="pc" />
                thereby enriching the blockchain ecosystem through enabling
                meaningful <br className="pc" />
                projects with the expression of the collective intelligence by{" "}
                <br className="pc" />
                an advanced democratic decision-making process.
              </p>
            </li>
            <li>
              <h3 className="sub-tit3-s">Our Vision</h3>
              <strong>
                Never stopped seeking <br className="pc" />
                fruitful development achievements <br className="pc" />
                and revitaliszing our community.
              </strong>
              <p>
                BOSagora focuses on establishing a decentralized{" "}
                <br className="pc" />
                blockchain platform which can implement <br className="pc" />a
                democratic decision-making process based on Trust Contracts{" "}
                <br className="pc" />
                and Congress Network.
              </p>
            </li>
          </ul>

          <div className="why-area">
            <h3 className="sub-tit3">Why BOSagora</h3>
            <p className="sub-txt">
              Pursuing democracy, legitimacy, fairness, transparency{" "}
              <br className="pc t" />
              and efficiency of the highest standard.
            </p>
            <picture className="img-why">
              <img src={ImgWhy} className="pc" alt="Why BOSagora" />
              <img src={ImgWhyM} className="m" alt="Why BOSagora" />
            </picture>
            <p>
              The BOSagora team aims to implement Smart Contracts, which will
              provide an efficient <br className="pc t" />
              and safety designed contract creation engine in an easy-to-develop
              language with many tools to be used by all.
            </p>
          </div>

          <div className="demo-area">
            <div className="txt-area">
              <h3 className="sub-tit3">
                VOTERA, <br className="m" /> proves <br className="pc" />
                deliberative
                <br className="m" /> democracy
              </h3>
              <strong>
                A democratic BOA ecosystem <br className="pc" />
                that is voluntarily driven by the <br className="pc" />
                community
              </strong>
              <p>
                Even large blockchain projects that claim to advocate
                decentralization and democracy encounter ‘social or peer
                pressure’, ‘decisions made by only a few’, ‘public deception’
                problems in the decision-making process. <br className="pc" />{" "}
                That’s why we developed VOTERA in which everyone can share an
                opinion and make decisions harmoniously. Experience honest and
                clean decision making on Agora Network.
              </p>
            </div>
            <div className="img-area">
              <img src={ImgWhyblog} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="sec-foundation">
        <div className="container">
          <h3 className="sub-tit3">Foundation</h3>
          <ul className="lst-foundation">
            <li>
              <picture className="img-foundation">
                <img src={ImgWhyfun1} className="pc" alt="Inhwan Kim" />
                <img src={ImgWhyfun1M} className="m" alt="Inhwan Kim" />
              </picture>
              <div className="txt">
                <strong>Inhwan Kim</strong>
                <p>
                  Inhwan Kim brings over 35 years of marketing experience to the
                  BOSagora team. <br className="pc" /> During these 35 years
                  Inhwan Kim has been the driving force behind many industry
                  leading brands spanning from IT all the way to traditional
                  finance. Some of these brands include the stock trading
                  community portal Paxnet and the spring water brand Jeju
                  Samdasu. Inhwan Kim has been apart of the BOS Platform
                  Foundation since 2015 where he served as president.
                </p>
              </div>
            </li>
            <li>
              <picture className="img-foundation">
                <img src={ImgWhyfun2} className="pc" alt="Serge Komaromi" />
                <img src={ImgWhyfun2M} className="m" alt="Serge Komaromi" />
              </picture>
              <div className="txt">
                <strong>Serge Komaromi</strong>
                <p>
                  Immediately after graduating from law school in Geneva,
                  Switzerland Serge Komaromi joined the international bank UBS
                  where he served as a fund manager. In 2009 after spending what
                  seemed like a lifetime in traditional banking Serge Komaromi
                  decided to turn his efforts to environmental initiatives in
                  the hopes of contributing to the improvement of the state of
                  our planet. In 2017 Serge Komaromi joined the BOSagora
                  Foundation, and has been in charge of general oversight and
                  legal matters.
                </p>
              </div>
            </li>
          </ul>

          <h3 className="sub-tit3">Advisor</h3>
          <ul className="lst-foundation">
            <li>
              <picture className="img-foundation">
                <img src={ImgWhyfun3} className="pc" alt="Don Tapscott" />
                <img src={ImgWhyfun3M} className="m" alt="Don Tapscott" />
              </picture>
              <div className="txt">
                <strong>Don Tapscott</strong>
                <p>
                  Don is the author of international best-seller ‘Blockchain
                  Revolution’, and also he authored or co-authored 15 widely
                  read books all over the world. In 2015, Thinkers50 named Don
                  as the 2nd most important business thinker in the world. In
                  2017, he established The Blockchain Research Institute, the
                  world’s leading think-tank dedicated to understanding
                  blockchain opportunities, challenges and use-cases.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="sec-ci bg-w">
        <div className="container">
          <div className="tit-area">
            <h3 className="sub-tit3">CI</h3>
            <strong>
              The BOSAGORA Foundation launched a new brand under the name
              BOSAGORA in April 2019. <br className="pc" />
              BOSAGORA is a combination of the words “BOS” and “AGORA”, meaning
              the true birth of democracy. <br className="pc" />
              Agora embodies the vision of a company that leads technology and
              continuously develops <br className="pc" />
              for a better future for all of us.
            </strong>
            <p>
              The BOSAGORA team aims to grow together with partners, and
              provides a brand guidebook for a convenient process.
            </p>
            <picture className="img-ci">
              <img src={ImgCi} className="pc t" alt="BOSagora" />
              <img src={ImgCiM} className="m" alt="BOSagora" />
            </picture>
            <div className="btn-area">
              <a
                href="/files/BOSagora_BI_branding.pdf"
                className="btn-g white download book"
                target="_blank"
              >
                CI Brand Book <em>Download</em>{" "}
                <span className="material-symbols-outlined">download</span>
              </a>
              <a
                href="/files/BOSagora_Logo.ai"
                className="btn-g white download ai"
                target="_blank"
              >
                AI <em>Download</em>{" "}
                <span className="material-symbols-outlined">download</span>
              </a>
              <a
                href="/files/BOSagora_Logo_png.zip"
                className="btn-g white download ai"
                target="_blank"
              >
                PNG <em>Download</em>{" "}
                <span className="material-symbols-outlined">download</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
