import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import { ReceiveNews } from "../../components/ReceiveNews/ReceiveNews";
import NewsThumb from "assets/images/thumb/thumb-news.jpg";
import { isDesktop } from "react-device-detect";

export const Newsview: React.FC = () => {
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);
  const handleScroll = () => {
    if (ScrollY > 464) {
      setScrollY(window.scrollY);
      setScrollActive(true);
    } else {
      setScrollY(window.scrollY);
      setScrollActive(false);
    }
  };
  useEffect(() => {
    function scrollListener() {
      if (isDesktop) window.addEventListener("scroll", handleScroll);
    }
    scrollListener();
    return () => {
      if (isDesktop) window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <PageWrapper>
      <section className="sec-areatop-sub">
        <div className="container">
          <div className="history">
            NEWS <span>/</span> Official Partner
          </div>
          <h2 className="subtit">Strategic partnership with NHN Cloud</h2>
          <div className="updated">Updated  2022-07-05</div>
        </div>
      </section>

      <section className="sec-g board-view-wrap bg-w">
        <div className="container">
          <div className="txt-wrap">
            <p>
              BOSagora agrees to partner with NHN Cloud, an integrated cloud
              company, to revitalize the BizNet token economy by providing more
              convenient environments and beneficial conditions to BizNet-based
              DApp partners. Furthermore, in various business-based services to
              be introduced in the future, we have agreed to provide a more
              competitive environment by combining the technologies of BOSagora
              and NHN Cloud.
            </p>
            <img src={NewsThumb} className="thumb" alt="" />
            <p>
              NHN Cloud, expands beyond a game platform to a global IT platform
              NHN Cloud provides integrated cloud services that enable complex
              infrastructure, platform development, and overall service delivery
              for operational operations. Businesses that offer online services
              that require complex infrastructure and platform development and
              operational tasks provide optimized solutions and affordable,
              industry-specific clouds for a wide range of industries to help
              them develop content more usefully, conveniently and quickly.
              <br className="pc" />
              <br className="pc" />
              BOSagora cooperates with NHN Cloud by maximizing the capabilities
              and resources of both parties to implement services such as NFT
              Marketplace and P2E based on BizNet with more convenient and
              favorable conditions.
              <br className="pc" />
              <br className="pc" />
              an eye on BOSagora and our partners who have the same goal as us.
            </p>
          </div>
        </div>
        <ul
          className={ScrollActive ? "fixed board-btn-wrap" : "board-btn-wrap"}
        >
          <li>
            <a href="#!" className="link-prev">
              <span className="blind">이전글</span>
              <span className="material-symbols-outlined">arrow_back</span>
            </a>
          </li>
          <li>
            <a href="#!" className="link-next">
              <span className="blind">다음글</span>
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </a>
          </li>
          <li>
            <a href="#!" className="link-lst">
              <span className="blind">뉴스 목록</span>
              <span className="material-symbols-outlined">apps</span>
            </a>
          </li>
        </ul>
      </section>
      <ReceiveNews />
    </PageWrapper>
  );
};
