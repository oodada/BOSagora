import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import { Link } from "../../components/Link";
import { HashLink } from "react-router-hash-link";

export const Tools: React.FC = () => {
  return (
    <PageWrapper>
      <section className="sec-areatop">
        <div className="container">
          <div className="subtit-area et">
            <span className="co">Getting Started</span>
            <h2 className="subtit">TOOLS</h2>
          </div>
        </div>
      </section>

      <section className="sec-g sec-tools">
        <div className="container">
          <nav className="tab- tab-square">
            <ul className="lst-">
              <li>
                <HashLink to="#wallet" smooth>
                  Wallet
                </HashLink>
              </li>
              <li>
                <HashLink to="#explorer" smooth>
                  Block Explorer
                </HashLink>
              </li>
              <li>
                <HashLink to="#sdk" smooth>
                  SDK
                </HashLink>
              </li>
              <li>
                <HashLink to="#ide" smooth>
                  IDE
                </HashLink>
              </li>
              <li>
                <HashLink to="#dex" smooth>
                  DEX
                </HashLink>
              </li>
            </ul>
          </nav>

          <div id="wallet" className="sec-area">
            <h3 className="sec-tit2">Wallet</h3>
            <ul className="lst-tools box-over wallet">
              <li>
                <Link to="https://metamask.io/download/">
                  <strong>Metamask</strong>
                  <span className="link- link-goto">
                    VISIT
                    <span className="material-symbols-outlined s300">
                      north_east
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div id="explorer" className="sec-area">
            <h3 className="sec-tit2">Block Explorer</h3>
            <ul className="lst-tools box-over explorer">
              <li>
                <Link to="https://www.boascan.io">
                  <strong>BOAScan</strong>
                  <span className="link- link-goto">
                    VISIT
                    <span className="material-symbols-outlined s300">
                      north_east
                    </span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="https://www.agorascan.io">
                  <strong>AgoraScan</strong>
                  <span className="link- link-goto">
                    VISIT
                    <span className="material-symbols-outlined s300">
                      north_east
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div id="sdk" className="sec-area">
            <h3 className="sec-tit2">SDK</h3>
            <ul className="lst-tools box-over sdk">
              <li>
                <Link to="https://web3js.readthedocs.io/en/v1.8.0/">
                  <strong>web3 lib</strong>
                  <span className="link- link-goto">
                    VISIT
                    <span className="material-symbols-outlined s300">
                      north_east
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div id="ide" className="sec-area">
            <h3 className="sec-tit2">IDE</h3>
            <ul className="lst-tools box-over ide">
              <li>
                <Link to="https://remix.ethereum.org/">
                  <strong>Remix IDE</strong>
                  <span className="link- link-goto">
                    VISIT
                    <span className="material-symbols-outlined s300">
                      north_east
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div id="dex" className="sec-area">
            <h3 className="sec-tit2">DEX</h3>
            <ul className="lst-tools box-over bosagora">
              <li>
                <Link to="https://www.boaswap.io">
                  <strong>BOASwap</strong>
                  <span className="link- link-goto">
                    VISIT
                    <span className="material-symbols-outlined s300">
                      north_east
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
