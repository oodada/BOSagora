import * as React from "react";
import { useEffect, useState } from "react";
import { PageWrapper } from "../../components/Containers/PageWrapper";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import CountUp from "react-countup";
import { queryAgoraChain } from "../../utils/queryAgoraChain";
import {
  calculateStakingRewards,
  getReward,
  RewardPeriod,
} from "../../utils/calculateStakingRewards";
import {
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { coinID, getBOAPrice } from "../../utils/queryPrice";
import { FormattedMessage, useIntl } from "react-intl";
import { HashLink } from "react-router-hash-link";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
];

export const Earn: React.FC = () => {
  const [state, setState] = useState({
    amountBOA: 0,
    totalValidators: 0,
    epochNum: 0,
    status: 0,
  });
  const boaPerValidator = 40_000;
  const { locale, formatMessage } = useIntl();
  const [rewardBOA, setRewardBOA] = useState(0);
  const [rewardPercent, setRewardPercent] = useState("0");
  const [currentValidator, setCurrentValidator] = useState(1);
  const [rewardPeriod, setRewardPeriod] = useState(RewardPeriod.YEAR);
  const [formattedAPR, setFormattedAPR] = useState(0);
  const [BOAPrice, setBOAPrice] = useState<number>();
  const [BOACalcPrice, setBOACalcPrice] = useState("0");

  useEffect(() => {
    (async () => {
      const response = await queryAgoraChain();
      if (response.statusCode === 200) {
        const currentAPR = calculateStakingRewards({
          totalAtStake: response.body.amountBOA,
          epochNum: response.body.epochNum,
        });
        setFormattedAPR(Math.round(currentAPR * 1000) / 10);
        setState({
          amountBOA: response.body.amountBOA ?? 0,
          totalValidators: response.body.totalValidators,
          epochNum: response.body.epochNum,
          status: response.statusCode,
        });
      }
    })();
    getBOAPrice()
      .then((result) => {
        if (result[coinID]) {
          const quote = result[coinID];
          if (locale === "ko") {
            setBOAPrice(quote.krw);
          } else {
            setBOAPrice(quote.usd);
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (state.status === 200) {
      const estimated = getReward(
        state.epochNum,
        currentValidator,
        state.amountBOA,
        rewardPeriod
      );
      setRewardBOA(estimated);
      const p = (estimated / (currentValidator * 40000)) * 100;
      setRewardPercent(p ? p.toFixed(2) : "0");
    }
    if (BOAPrice && rewardBOA) {
      setBOACalcPrice(
        numberWithCommas(
          (BOAPrice * rewardBOA).toFixed(locale === "ko" ? 0 : 2)
        )
      );
    } else {
      setBOACalcPrice("0");
    }
  }, [state, currentValidator, rewardPeriod, BOAPrice, rewardBOA]);

  const handleChangeValidator = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") setCurrentValidator(newValue);
  };

  const handlerChangeRewardPeriod = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRewardPeriod(Number((e.target as HTMLInputElement).value));
  };

  return (
    <PageWrapper>
      <section className="sec-areatop">
        <div className="container">
          <div className="subtit-area">
            <span className="co">
              <FormattedMessage defaultMessage="Earn Staking" />
            </span>
            <h2 className="subtit">
              <FormattedMessage defaultMessage="REWARDS" />
            </h2>
            <p className="txt">
              <FormattedMessage
                defaultMessage="Staking gives you the power to earn rewards on crypto holdings.{br}{brt}
                Become a better investor, right in the BOA Staked."
                values={{
                  br: <br className="pc" />,
                  brt: <br className="t" />,
                }}
              />
            </p>
          </div>
          <div className="btn-area">
            <HashLink smooth to="#calculate-sec" className="btn-g white">
              <FormattedMessage defaultMessage="Calculate Rewards" />
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </HashLink>
          </div>
        </div>
      </section>

      <section className="sec-rewards">
        <div className="container">
          <h3 className="blind">
            <FormattedMessage defaultMessage="REWARDS" />
          </h3>
          {state ? (
            <ul className="lst-rewards">
              <li>
                <CountUp
                  end={state.amountBOA}
                  duration={2}
                  separator=","
                  className="countup"
                />
                <p>
                  <FormattedMessage defaultMessage="Total network BOA Staked" />
                </p>
              </li>
              <li>
                <CountUp
                  end={state.totalValidators}
                  duration={1.5}
                  separator=","
                  className="countup"
                />
                <p>
                  <FormattedMessage defaultMessage="Total Validators" />
                </p>
              </li>
              <li>
                <CountUp
                  end={formattedAPR}
                  duration={1}
                  decimals={1}
                  suffix="%"
                  className="countup"
                />
                <p>
                  <FormattedMessage defaultMessage="Reward rate" />
                </p>
              </li>
            </ul>
          ) : (
            <CircularProgress />
          )}
        </div>
      </section>

      <section className="sec-calculate bg-w p100" id="calculate-sec">
        <div className="container">
          <h3 className="sub-tit3">
            <FormattedMessage defaultMessage="Calculate Rewards" />
          </h3>
          <div className="txt-calculate">
            <FormattedMessage
              defaultMessage="If you staking {brM} {selectedBOA},{br}{brM} You Should get {brM} {profitBOA}{price} {brM}per {period}{brM} {br}with a {percent} reward rate."
              values={{
                br: <br className="pc" />,
                brT: <br className="t" />,
                brM: <br className="m" />,
                selectedBOA: (
                  <span>
                    <em>
                      {numberWithCommas(currentValidator * boaPerValidator)}
                    </em>
                    BOA <em className="reg">(=</em>
                    <em>{currentValidator}</em>{" "}
                    {currentValidator > 1
                      ? formatMessage({ defaultMessage: "validators" })
                      : formatMessage({ defaultMessage: "validator" })}
                    <em className="reg">)</em>
                  </span>
                ),
                profitBOA: (
                  <span>
                    <em>{numberWithCommas(rewardBOA)}</em> BOA
                  </span>
                ),
                price: BOACalcPrice ? (
                  <em className="reg f40">{`(≒ ${
                    locale === "ko" ? "￦" : "$"
                  }${BOACalcPrice})`}</em>
                ) : (
                  <></>
                ),
                period: (
                  <span>
                    <FormattedMessage
                      defaultMessage="{periodLabel}"
                      values={{
                        periodLabel:
                          rewardPeriod === 0
                            ? formatMessage({ defaultMessage: "Daily" })
                            : rewardPeriod === 1
                            ? formatMessage({ defaultMessage: "Weekly" })
                            : rewardPeriod === 2
                            ? formatMessage({ defaultMessage: "Monthly" })
                            : rewardPeriod === 3
                            ? formatMessage({ defaultMessage: "Yearly" })
                            : "",
                      }}
                    />
                  </span>
                ),
                percent: <em>{`${rewardPercent}%`}</em>,
              }}
            />
          </div>

          <RadioGroup
            aria-label="anonymous"
            onChange={handlerChangeRewardPeriod}
            value={rewardPeriod}
            row
            className="btn-area"
          >
            <FormControlLabel
              value={RewardPeriod.DAY}
              control={<Radio />}
              label={formatMessage({ defaultMessage: "Daily" })}
            />
            <FormControlLabel
              value={RewardPeriod.WEEK}
              control={<Radio />}
              label={formatMessage({ defaultMessage: "Weekly" })}
            />
            <FormControlLabel
              value={RewardPeriod.MONTH}
              control={<Radio />}
              label={formatMessage({ defaultMessage: "Monthly" })}
            />
            <FormControlLabel
              value={RewardPeriod.YEAR}
              control={<Radio />}
              label={formatMessage({ defaultMessage: "Yearly" })}
            />
          </RadioGroup>
          <Box sx={{ width: 960 }}>
            <Slider
              aria-label="Always visible"
              defaultValue={1}
              step={1}
              marks={marks}
              valueLabelDisplay="on"
              onChange={handleChangeValidator}
            />
          </Box>
          <p className="unit">
            <FormattedMessage defaultMessage="1 validator <= 40,000 BOA" />
          </p>
        </div>
      </section>

      <section className="sec-notice">
        <div className="container">
          <h3 className="sub-tit3">
            <FormattedMessage defaultMessage="※ NOTICE" />
          </h3>
          <ul className="lst-notice">
            <li>
              <FormattedMessage defaultMessage="These Rewards are estimate figures." />
            </li>
            <li>
              <FormattedMessage defaultMessage="Please check here to check the exact Reward value." />
            </li>
          </ul>
        </div>
      </section>
    </PageWrapper>
  );
};
