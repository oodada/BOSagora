import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import { Link } from "../../components/Link";

export const Developers: React.FC = () => {
  return (
    <PageWrapper>
      <section className="sec-areatop">
        <div className="container">
          <div className="subtit-area">
            <span className="co">Getting Started</span>
            <h2 className="subtit">Start Building</h2>
          </div>
        </div>
      </section>

      <section className="sec-g sec-validators">
        <div className="container">
          <h3 className="sec-tit2">Validators</h3>
          <Link
            to="https://agora-staking.bosagora.org"
            className="link-validators"
          >
            <strong>Validator Start</strong>
            <span className="link- link-goto">
              Staking{" "}
              <span className="material-symbols-outlined s300">north_east</span>
            </span>
          </Link>
        </div>
      </section>

      <section className="sec-g sec-develpoers">
        <div className="container">
          <h3 className="sec-tit2">Developers</h3>
          <ul className="lst-develpoers box-over">
            <li>
              <Link to="https://docs.bosagora.org/getting-started/deploy-smart-contract">
                <strong>
                  Deploy <br className="pc" />
                  <br className="t" />
                  Smart Contract
                </strong>
                <p>
                  How to compile <br className="pc" />
                  <br className="t" />
                  and deploy the developed <br className="pc" />
                  <br className="t" />
                  smart contract.
                </p>
                <span className="link- link-goto">
                  Quick Start{" "}
                  <span className="material-symbols-outlined s300">
                    north_east
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="https://docs.bosagora.org/getting-started/erc-20-tokens">
                <strong>
                  ERC20 <br className="pc" />
                  Tokens
                </strong>
                <p>
                  ERC20 Tokens: <br className="pc" />
                  Easily distribute ERC20 of <br className="pc" />
                  Solidity Simplicity ~10 minutes.
                </p>
                <span className="link- link-goto">
                  Quick Start{" "}
                  <span className="material-symbols-outlined s300">
                    north_east
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="https://docs.bosagora.org/getting-started/deploy-nfts">
                <strong>
                  Deploy <br className="pc" />
                  NFTs
                </strong>
                <p>
                  Estimated time to complete <br className="pc" />
                  this guide: ~15 minutes.
                </p>
                <span className="link- link-goto">
                  Quick Start{" "}
                  <span className="material-symbols-outlined s300">
                    north_east
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
};
