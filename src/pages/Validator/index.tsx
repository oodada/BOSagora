import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import { PageWrapper } from "../../components/Containers/PageWrapper";
import { FaqToggleBox } from "../../components/Faq/FaqToggleBox";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import { Link } from "../../components/Link";

export const Validator: React.FC = () => {
  const [quickIndex, setQuickIndex] = useState(0);
  const carouselRef = useRef(null);

  const settings: Settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    draggable: false,
    vertical: true,
    initialSlide: quickIndex,
    accessibility: false,
    speed: 300,
    afterChange(currentSlide: number) {
      setQuickIndex(currentSlide);
    },
  };

  const handlerChangeQuickStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuickIndex(Number((e.target as HTMLInputElement).value));
  };
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (carouselRef?.current?.slickGoTo) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      carouselRef?.current?.slickGoTo(quickIndex);
    }
  }, [quickIndex]);

  return (
    <PageWrapper>
      <section className="sec-areatop">
        <div className="container">
          <div className="subtit-area">
            <span className="co">Becoming a</span>
            <h2 className="subtit">VALIDATOR</h2>
            <p className="txt">
              BOSagora contains the vision of BOSagora to realize the birth of a
              true democracy <br className="pc" />
              by combining the words “BOS”, which represents the basic operating
              system of a computer, <br className="pc" />
              and “AGORA”, which symbolizes direct democracy.
            </p>
          </div>
          <div className="btn-area">
            <HashLink to="#quick-start" smooth className="btn-g white">
              Quick Start{" "}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </HashLink>
            <Link
              to="https://www.agorascan.io/validators"
              className="btn-g white"
            >
              Validators Overview{" "}
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="sec-g sec-validator bg-w">
        <div className="container">
          <h3 className="sec-tit3">
            Why should be a <br className="pc" /> validator?
          </h3>
          <ul className="lst-validator">
            <li>
              <strong>Participate</strong>
              <p>
                Each node means a validator, so we can go one step closer to
                decentralization by running a node. If you&#39;re a holder,
                bring value to your BOA by supporting the health and
                decentralization of the network, and ensure you have a say in
                its future.
              </p>
            </li>
            <li>
              <strong>Vote your choice</strong>
              <p>
                In the event of a chain fork, where two chains emerge with two
                different sets of rules, running your own node guarantees your
                ability to choose which set of rules you support. It&#39;s up to
                you to upgrade to new rules and support proposed changes, or
                not. If you&#39;re staking BOA, running your own node allows you
                to choose your own client, to minimize your risk of slashing and
                to react to fluctuating demands of the network over time.
                Staking with a third party forfeits your vote on which client
                you think is the best choice.
              </p>
            </li>
            <li>
              <strong>Decenteralization</strong>
              <p>
                Centralized cloud servers can provide a lot of computing power,
                but they provide a target for nation-states or attackers looking
                to disrupt the network. Network resilience is achieved with more
                nodes, in geographically diverse locations, operated by more
                people of diverse backgrounds. As more people run their own
                node, reliance on centralized points of failure diminishes,
                making the network stronger.
              </p>
            </li>
            <li>
              <strong>Sovereignty</strong>
              <p>
                An Ethereum wallet allows you to take full custody and control
                of your digital assets by holding the private keys to your
                addresses, but those keys don&#39;t tell you the current state
                of the blockchain, such as your wallet balance. By default,
                Ethereum wallets typically reach out to a 3rd-party node, such
                as Infura or Alchemy, when looking up your balances. Running
                your own node allows you to have your own copy of the Ethereum
                blockchain.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* 화살표 클릭시 : 네비게이션 동기화 */}
      <section id="quick-start" className="sec-quick bg-w">
        <div className="container">
          <h3 className="sec-tit3">
            QUICK <br className="pc" />
            START
          </h3>
          <div className="slider-wrap">
            <RadioGroup
              value={quickIndex}
              onChange={handlerChangeQuickStart}
              className="slider-nav"
            >
              <FormControlLabel
                control={<Radio />}
                label="Checklist"
                value={0}
              />
              <FormControlLabel
                control={<Radio />}
                label="Download mainnet zip file"
                value={1}
              />
              <FormControlLabel
                control={<Radio />}
                label="Run an Agora execution & consensus layer"
                value={2}
              />
              <FormControlLabel
                control={<Radio />}
                label="Staking BOA"
                value={3}
              />
              <FormControlLabel
                control={<Radio />}
                label="Run an Agora validator (Agora-cl-validator)"
                value={4}
              />
            </RadioGroup>

            <Slider
              className="slider slider-for"
              {...settings}
              ref={carouselRef}
            >
              <div>
                <h3 className="blind">Checklist</h3>
                <p className="key">
                  This checklist will help you understand the role of a
                  validator and prepare you for the role.
                </p>
                <div className="detail-wrap checklist">
                  <div className="step-wrap">
                    <div className="step">
                      <em>Section1</em>
                      <strong>
                        Before <br className="pc" />
                        you start
                      </strong>
                      <p>
                        Review this section before deciding to proceed with
                        validator setup.
                      </p>
                    </div>
                    <div className="step">
                      <em>Section2</em>
                      <strong>
                        During <br className="pc" />
                        setup
                      </strong>
                      <p>
                        Use this as a reference during client setup to check off
                        important steps.
                      </p>
                    </div>
                    <div className="step">
                      <em>Section3</em>
                      <strong>
                        After <br className="pc" />
                        depositing
                      </strong>
                      <p>
                        Protect your funds using monitoring software, and learn
                        how to handle different real world scenarios.
                      </p>
                    </div>
                  </div>

                  <a href="#!" className="btn-line link-goto">
                    See more
                    <span className="material-symbols-outlined">
                      arrow_right_alt
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="blind">Download mainnet zip file</h3>
                <p className="key">
                  How to install a node for the Agora Mainnet.
                </p>
                <div className="detail-wrap download">
                  <div className="step">
                    <strong>Linux or MacOS</strong>
                    <em>For macOS 10.9 or later</em>
                    <a href="#!" className="btn-line  link-goto">
                      Download{" "}
                      <span className="material-symbols-outlined s300">
                        north_east
                      </span>
                    </a>
                  </div>
                  <div className="step">
                    <strong>Windows</strong>
                    <em>For 64-bit Winodws7 or later</em>
                    <a href="#!" className="btn-line link-goto">
                      Download{" "}
                      <span className="material-symbols-outlined s300">
                        north_east
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="blind">
                  Run an Agora execution & consensus layer
                </h3>
                <p className="key">Let’s run an Agora-el & Agora-cl layer</p>
                <div className="detail-wrap run">
                  <dl>
                    <dt>Initialize the execution layer</dt>
                    <dd>
                      ./agora.sh el-node init{" "}
                      <button>
                        <span className="material-symbols-outlined">
                          content_copy
                        </span>
                      </button>
                    </dd>
                  </dl>
                  <dl>
                    <dt>Run an Agora execution layer (Agora-el)</dt>
                    <dd>
                      ./agora.sh el-node run{" "}
                      <button>
                        <span className="material-symbols-outlined">
                          content_copy
                        </span>
                      </button>
                    </dd>
                  </dl>
                  <dl>
                    <dt>Run an Agora consensus layer (Agora-cl)</dt>
                    <dd>
                      ./agora.sh cl-node run{" "}
                      <button>
                        <span className="material-symbols-outlined">
                          content_copy
                        </span>
                      </button>
                    </dd>
                  </dl>
                </div>
              </div>
              <div>
                <h3 className="blind">Staking BOA</h3>
                <div className="detail-wrap staking">
                  <p>
                    This step is optional but essential if you want to
                    participate in securing the Agora Blockchain, have the right
                    to vote and receive rewards. Create personal keys and
                    prepare deposit data and deposit stake
                  </p>
                  <a href="#!" className="btn-line link-goto">
                    GO TO{" "}
                    <span className="material-symbols-outlined s300">
                      north_east
                    </span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="blind">
                  Run an Agora validator (Agora-cl-validator)
                </h3>
                <p className="key">
                  Let’s run an Agora validator (Agora-cl-validator)
                </p>
                <div className="detail-wrap run">
                  <dl>
                    <dt>Import validator keys</dt>
                    <dd>
                      ./agora.sh validator import &#60;your MAINNET key stores
                      folder&#62;
                      <button>
                        <span className="material-symbols-outlined">
                          content_copy
                        </span>
                      </button>
                    </dd>
                  </dl>
                  <dl>
                    <dt>Run your validator</dt>
                    <dd>
                      ./agora.sh validator run
                      <button>
                        <span className="material-symbols-outlined">
                          content_copy
                        </span>
                      </button>
                    </dd>
                  </dl>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className="sec-faq">
        <div className="container">
          <h3 className="sec-tit3">FAQ</h3>
          <div className="sec-cont">
            <ul className="lst-faq box-over">
              <FaqToggleBox defaultExpand={true}>
                <div className="question">What exactly is a validator?</div>
                <div className="answer">
                  A validator is a virtual entity that lives on the Agora Chain,
                  represented by a balance, public key, and other properties,
                  and participates in consensus of the Agora network.
                </div>
              </FaqToggleBox>
              <FaqToggleBox>
                <div className="question">What is a validator client?</div>
                <div className="answer">
                  A validator client is the software that acts on behalf of the
                  validator by holding and using its private key to make
                  attestations about the state of the chain.
                  <br className="pc" /> single validator client can hold many
                  key pairs, controlling many validators.
                </div>
              </FaqToggleBox>
              <FaqToggleBox>
                <div className="question">
                  How much BOA do I need to stake to become a validator?
                </div>
                <div className="answer">
                  Each key-pair associated with a validator requires locking
                  40000 BOA to be activated,
                  <br className="pc" /> which represents your initial balance as
                  well as your initial and maximum voting power for any
                  validator.
                </div>
              </FaqToggleBox>
              <FaqToggleBox>
                <div className="question">
                  Why do I need to have funds at stake?
                </div>
                <div className="answer">
                  As a validator, you&apos;ll need to have funds at stake so you
                  can be penalized for behaving dishonestly.
                  <br className="pc" /> In other words, to keep you honest, your
                  actions need to have financial consequences.
                </div>
              </FaqToggleBox>
              <FaqToggleBox>
                <div className="question">
                  When should I top up my validator’s balance?{" "}
                  <span className="ico-plus"></span>
                </div>
                <div className="answer">
                  The answer to this question very much depends on how much BOA
                  you have at your disposal.
                  <br className="pc" /> You should certainly top up if your
                  balance is close to 20000 BOA.
                  <br className="pc" /> This is to ensure you don’t get kicked
                  out of the validator set.
                  <br className="pc" /> At the other end of the spectrum, if
                  your balance is closer to 38000 BOA, it’s probably not worth
                  adding the extra BOA required to get back to 40000.
                </div>
              </FaqToggleBox>
            </ul>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
