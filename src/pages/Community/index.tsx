import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import { ReceiveNews } from "components/ReceiveNews/ReceiveNews";

import NewsThumb1 from "assets/images/thumb/thumb-news1.jpg";
import NewsThumb2 from "assets/images/thumb/thumb-news2.jpg";
import NewsThumb3 from "assets/images/thumb/thumb-news3.jpg";
import NewsThumb4 from "assets/images/thumb/thumb-news4.jpg";
import NewsThumb5 from "assets/images/thumb/thumb-news5.jpg";
import NewsThumb6 from "assets/images/thumb/thumb-news6.jpg";
import NewsThumb7 from "assets/images/thumb/thumb-news7.jpg";
import NewsThumb8 from "assets/images/thumb/thumb-news8.jpg";
import NewsThumb9 from "assets/images/thumb/thumb-news9.jpg";
import { Link } from "../../components/Link";
import { SubscriptEmail } from "../../components/Subscript/SubscriptEmail";

export const Community: React.FC = () => {
  return (
    // News(list, view) 페이지 news-wrap 클래스 추가해주세요.
    <PageWrapper>
      <section className="sec-areatop">
        <div className="container">
          <div className="subtit-area">
            <span className="co">BOSagora</span>
            <h2 className="subtit">NEWS</h2>
            <p className="txt">
              Enter your email address to subscribe our newsletter for news
              announcements, latest updates, and special events!
            </p>
          </div>
          <div className="sub-top">
            <SubscriptEmail />
          </div>
        </div>
      </section>

      <section className="sec-g board-lst-wrap">
        <div className="container">
          <nav className="tab- tab-round">
            <ul className="lst-">
              <li>
                <a href="#!">NTF</a>
              </li>
              <li className="on">
                <a href="#!">NOTICE</a>
              </li>
              <li>
                <a href="#!">COIN</a>
              </li>
              <li>
                <a href="#!">NEWS</a>
              </li>
              <li>
                <a href="#!">BRIK</a>
              </li>
              <li>
                <a href="#!">Metacity</a>
              </li>
              <li>
                <a href="#!">WSO</a>
              </li>
              <li>
                <a href="#!">PARTNERSHIP</a>
              </li>
            </ul>
          </nav>
          <ul className="board-lst-cont box-over">
            <li>
              <a href="/en/Community/Newsview/">
                <span className="thumb">
                  <img src={NewsThumb1} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">NEWS</em>
                  <p className="txt">
                    Signed a partnership with NHN Cloud, <br className="pc" />
                    Korea&apos;s leading cloud service, BOSagora
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="thumb">
                  <img src={NewsThumb2} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">NOTICE</em>
                  <p className="txt">
                    BOSagora Biznet <br className="pc" />
                    BoaSwap Function Implementation Live
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="thumb">
                  <img src={NewsThumb3} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">NEWS</em>
                  <p className="txt">
                    Signed a strategic partnership with BOSagora,{" "}
                    <br className="pc" />a big data-based fintech company, Fin
                    Plus Global
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="thumb">
                  <img src={NewsThumb4} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">NFT</em>
                  <p className="txt">
                    BOSagora, <br className="pc" />
                    [FM_US NFT] Limited to 1,000 Crowdy
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="thumb">
                  <img src={NewsThumb5} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">NEWS</em>
                  <p className="txt">
                    BOSagora signed a business agreement with Cinema9,{" "}
                    <br className="pc" />a premium cultural contents company
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="thumb">
                  <img src={NewsThumb6} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">Coin</em>
                  <p className="txt">
                    BOSagora Releases Test Version of CoinNet
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="thumb">
                  <img src={NewsThumb7} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">Coin</em>
                  <p className="txt">
                    Current status of blockchain development, external{" "}
                    <br className="pc" />
                    audit results and plans to disclose CoinNet test version
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="thumb">
                  <img src={NewsThumb8} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">NEWS</em>
                  <p className="txt">
                    ‘2021 Global ESG Metacity Summit’ <br className="pc" />
                    will be held both offline and online on the 7th
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#!">
                <span className="thumb">
                  <img src={NewsThumb9} alt="" className="img-news" />
                </span>
                <span className="txt-wrap">
                  <em className="sort">Notice</em>
                  <p className="txt">
                    MetaCity Forum held ‘2021 Global ESG MetaCity Summit’{" "}
                    <br className="pc" />
                    jointly with Namyangju City
                  </p>
                  <span className="date">
                    {" "}
                    2022 <span className="md">09.05</span>{" "}
                  </span>
                </span>
              </a>
            </li>
          </ul>
          <nav className="pagination">
            <a href="#!" className="btn- btn-prev">
              이전
            </a>
            <a href="#!" className="num curr" title="현재위치">
              1
            </a>
            <a href="#!" className="num">
              2
            </a>
            <a href="#!" className="num">
              3
            </a>
            <a href="#!" className="num">
              4
            </a>
            <a href="#!" className="num">
              5
            </a>
            <a href="#!" className="btn- btn-next active">
              다음
            </a>
          </nav>
          <button className="btn-more m">more</button>
        </div>
      </section>

      <section className="sec-g sec-inthepress p100">
        <div className="container">
          <h2 className="tit-sub">In the PRESS</h2>
          <ul className="lst-press">
            <li className="coindesk">
              <Link to="https://www.coindesk.com/sponsored-content/bosagoras-t-fi-platform-links-with-binance-smart-chain/">
                coindesk
              </Link>
            </li>
            <li className="cointele">
              <Link to="https://cointelegraph.com/press-releases/bosagora-unveils-t-fi-the-first-real-economy-decentralized-financial-model">
                cointelegraph the future of money
              </Link>
            </li>
            <li className="bloom">
              <Link to="https://www.bloomberg.com/press-releases/2021-02-18/bosagora-unveils-the-t-fi-a-first-real-economy-defi-financial-model">
                Bloomberg
              </Link>
            </li>
            <li className="yahoo">
              <Link to="https://www.yahoo.com/now/bosagora-launches-biznet-exclusive-boaswap-130000140.html">
                yahoo! finance
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <ReceiveNews />
    </PageWrapper>
  );
};
