import React from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import { addNetwork } from "../../utils/wallet";
import { Link } from "../../components/Link";
import { CopyClipboard } from "../../components/CopyClipboard/CopyClipboard";

export const Agorachain: React.FC = () => {
  const handleAddMetamaskClick = async () => {
    await addNetwork();
  };

  return (
    <PageWrapper>
      <section className="sec-areatop">
        <div className="container">
          <div className="subtit-area">
            <span className="co">Mainnet</span>
            <h2 className="subtit">AGORA chain</h2>
          </div>
        </div>
      </section>

      <section className="sec-g sec-chain">
        <div className="container">
          <div className="metamask-wrap">
            <button className="btn-metamask" onClick={handleAddMetamaskClick}>
              Add Agora Network to Metamask
            </button>
            <div className="chain-metamask">
              <strong>Agora Mainnet Information</strong>
              <dl>
                <dt>Network Name :</dt>
                <dd>
                  <CopyClipboard text="Agora mainnet" />
                </dd>
              </dl>
              <dl>
                <dt>ChainID :</dt>
                <dd>
                  <CopyClipboard text="2151" />
                </dd>
              </dl>
              <dl className="column">
                <dt>JSON-RPC URL :</dt>
                <dd>
                  <CopyClipboard text="https://mainnet.bosagora.org" />
                  <br className="pc" />
                  <CopyClipboard text="https://rpc.bosagora.org" />
                </dd>
              </dl>
              <dl className="et">
                <dt>Currency Symbol :</dt>
                <dd>
                  <CopyClipboard text="BOA" />
                </dd>
              </dl>
              <dl className="column">
                <dt>BOAScan el explorer :</dt>
                <dd>
                  <CopyClipboard text="https://boascan.io" />
                </dd>
              </dl>
              <dl className="column">
                <dt>AgoraScan cl explorer :</dt>
                <dd>
                  <CopyClipboard text="https://agorascan.io" />
                </dd>
              </dl>
            </div>
          </div>
          <ul className="lst-chain box-over">
            <li className="blue fst">
              <Link to="https://boascan.io/">
                <strong>BOAScan</strong>
                <p>EVM based transcation &#38; smart contract engine</p>
                <span className="link- link-goto">
                  GO TO{" "}
                  <span className="material-symbols-outlined s300">
                    north_east
                  </span>
                </span>
              </Link>
            </li>
            <li className="blue">
              <Link to="https://agorascan.io/">
                <strong>AgoraScan</strong>
                <p>POS validators staked BOA</p>
                <span className="link- link-goto">
                  GO TO{" "}
                  <span className="material-symbols-outlined s300">
                    north_east
                  </span>
                </span>
              </Link>
            </li>
            <li className="fst">
              <Link to="https://docs.bosagora.org/validator-start/running-an-agora-node-and-validator/agora-mainnet">
                <strong>Agora mainnet</strong>
                <p>You can start an Agora mainnet node.</p>
                <span className="link- link-goto">
                  GO TO{" "}
                  <span className="material-symbols-outlined s300">
                    north_east
                  </span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="https://docs.bosagora.org/validator-start/running-an-agora-node-and-validator/agora-testnet">
                <strong>Agora testnet</strong>
                <p>You can start an Agora testnet node.</p>
                <span className="link- link-goto">
                  GO TO{" "}
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
