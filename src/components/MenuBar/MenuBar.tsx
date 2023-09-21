import { Link } from "../Link";
import { isMobile } from "react-device-detect";
import React, { useState } from "react";
import _ from "lodash";
import { MenuItem } from "./MenuItem";

const BOA_SCAN_URL = process.env.REACT_APP_SCAN_URL || undefined;

// isMobile 기준 768px 이하
// 해당페이지 표시 : 각 페이지에 해당하는 메뉴(li)에 .on 추가
// Developers에서 Agora Chain으로 가려고 하면 오류남

// isMobile 기준 768px 이하
// 해당페이지 표시 : 각 페이지에 해당하는 메뉴(li)에 .on 추가
// Developers에서 Agora Chain으로 가려고 하면 오류남
// mobile : 1depth 클릭시 on 추가, 메뉴 밖 영역 클릭시 메뉴 닫히게...

interface MenuProp {
  show: boolean;
}
export const MenuBar: React.FC<MenuProp> = ({ show }) => {
  const [active, setActive] = useState(false);
  const [txId, setTxId] = useState("");

  const handlerTxClick = () => {
    if (!BOA_SCAN_URL) return;
    if (_.isEmpty(txId)) {
      window.open(BOA_SCAN_URL, "_blank", "noopener,noreferrer");
    } else {
      window.open(BOA_SCAN_URL + "tx/" + txId, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <header id="header" className={active ? "active" : ""}>
      <div className="gnb-overlay-bg"></div>
      <div
        className="hd"
        style={{ top: show ? "0px" : isMobile ? "0px" : "-100px" }}
      >
        <div className="container">
          <h1 id="logo">
            <Link to="/" className="img-g">
              BOSagora
            </Link>
          </h1>
          <nav id="gnb">
            <h2 className="blind">전체메뉴</h2>
            <input type="checkbox" id="navHam" className="burger-input" />
            <label htmlFor="navHam" className="label-navham">
              <span className="blind">Menu</span>
              <div className="nav-ham">
                <div className="inner"></div>
              </div>
            </label>
            <div className="nav-bg"></div>
            <div className="nav-wrap">
              <ul className="navbar-nav gnb-1dep">
                {/* 클릭시 : on 추가 */}
                <li className="m">
                  <Link to="/" className="arr-none">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Ecosystem" className="none arr-none">
                    <span>Ecosystem</span>
                  </Link>
                  {/* <div className="sub"> */}
                  {/*   <ul className="gnb-2dep m1"> */}
                  {/*     <li>THE9 Token</li> */}
                  {/*     <li>NFT</li> */}
                  {/*     <li>Eco Museum</li> */}
                  {/*     <li>MetaCity</li> */}
                  {/*     <li>T-fi</li> */}
                  {/*     <li>BOA Swap</li> */}
                  {/*     <li>BOA Bridge</li> */}
                  {/*   </ul> */}
                  {/* </div> */}
                </li>
                <MenuItem setActive={setActive}>
                  <button>
                    <span>Developers</span>
                  </button>
                  <div className="sub">
                    <ul className="gnb-2dep m2">
                      <li>
                        <Link to="/Developers/">Getting Started </Link>
                      </li>
                      <li>
                        <Link to="/Developers/Agorachain">Agora Chain</Link>
                      </li>
                      <li>
                        <Link to="/Developers/Tools">Tools</Link>
                      </li>
                    </ul>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive}>
                  <button>
                    <span>Validator</span>
                  </button>
                  <div className="sub">
                    <ul className="gnb-2dep m3">
                      <li>
                        <Link to="/Validator">Becoming a Validator</Link>
                        <ul className="gnb-3dep">
                          <li>
                            <Link to="https://agora-staking.bosagora.org/checklist">
                              - Checklist
                            </Link>
                          </li>
                          <li>
                            <Link to="https://docs.bosagora.org/validator-start/running-an-agora-node-and-validator/agora-mainnet">
                              - Install an Agora node
                            </Link>
                          </li>
                          <li>
                            <Link to="https://agora-staking.bosagora.org/overview">
                              - Staking over 40,000 BOA
                            </Link>
                          </li>
                          <li>
                            <Link to="https://docs.bosagora.org/validator-start/running-an-agora-node-and-validator/agora-mainnet#import-validator-keys">
                              - Run a Validator Client
                            </Link>
                          </li>
                          <li>
                            <Link to="https://agora-staking.bosagora.org/faq">
                              - FAQ
                            </Link>
                          </li>
                          <li>
                            <Link to="https://www.agorascan.io/validators">
                              - Validators list
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#!">VOTERA</a>
                        <ul className="gnb-3dep">
                          <li>
                            <Link to="https://docs.bosagora.org/en/votera/introduction">
                              - What is VOTERA
                            </Link>
                          </li>
                          {/* <li>
                            <a href="#!">- Participate</a>
                          </li>
                          <li>
                            <a href="#!">- Suggestion list</a>
                          </li> */}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive}>
                  <button>
                    <span>Earn</span>
                  </button>
                  <div className="sub">
                    <ul className="gnb-2dep m4">
                      <li>
                        <Link to="/en/Earn">Rewards</Link>
                      </li>
                    </ul>
                  </div>
                </MenuItem>
                <MenuItem setActive={setActive}>
                  <button>
                    <span>Community</span>
                  </button>
                  <div className="sub">
                    <ul className="gnb-2dep m5">
                      <li>
                        <Link to="/Community/">News</Link>
                      </li>
                      <li>
                        <Link to="/Community/Socials">Socials</Link>
                      </li>
                      <li>
                        <Link
                          to="https://www.youtube.com/channel/UCjcTwkskyTmAwHpqv9Oynig"
                          className="arr"
                        >
                          YouTube
                        </Link>
                      </li>
                    </ul>
                  </div>
                </MenuItem>
                <li>
                  <Link to="/About/" className="none arr-none">
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link to="/Contact/" className="none arr-none">
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            <form id="search" action="">
              <fieldset>
                <legend className="blind">검색</legend>
                <div className="search-area">
                  <input
                    type="text"
                    className="input-search"
                    placeholder="BOA TXid"
                    value={txId}
                    onChange={(e) => {
                      setTxId(e.target.value);
                    }}
                  />
                  <button
                    id="btn-search"
                    className="btn-search"
                    title="검색"
                    onClick={handlerTxClick}
                  >
                    <span className="blind">검색</span>
                  </button>
                </div>
              </fieldset>
            </form>
            {/* <div id="lang">
              <input type="checkbox" id="selLang" className="input-lang m" />
              <label htmlFor="selLang" className="label-lang">
                <div className="btn-lang">
                  <span className="blind">selected Language</span>
                  <span className="material-symbols-outlined">language</span>
                </div>
              </label>
              <ul className="lst-lang">
                <li>
                  <a href="/en">EN</a>
                </li>
                <li>
                  <a href="/ko">KR</a>
                </li>
              </ul>
            </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
};
