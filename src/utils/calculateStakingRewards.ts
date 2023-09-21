export interface CalculateStakingRewardsParams {
  slotTimeInSec?: number;
  slotsInEpoch?: number;
  baseRewardFactor?: number;
  totalAtStake?: number; // BOA
  averageNetworkPctOnline?: number;
  vaildatorUptime?: number;
  validatorDeposit?: number; // BOA
  effectiveBalanceIncrement?: number; // gwei
  weightDenominator?: number;
  proposerWeight?: number;
  epochNum?: number;
}

export const calculateStakingRewards = ({
  slotTimeInSec = 12,
  slotsInEpoch = 32,
  // baseRewardFactor = 64,
  totalAtStake = 1_250_000_000, // BOA, ratio is kept (1_000_000/32)
  // averageNetworkPctOnline = 0.95,
  // vaildatorUptime = 0.99,
  // validatorDeposit = 40_000, // BOA
  // effectiveBalanceIncrement = 1_000_000_000_000, // gwei
  // weightDenominator = 64,
  // proposerWeight = 8,
  epochNum = 0,
}: CalculateStakingRewardsParams): number => {
  // Calculate number of epochs per year
  const avgSecInYear = 31556908.8; // 60 * 60 * 24 * 365.242
  const epochPerYear = avgSecInYear / (slotTimeInSec * slotsInEpoch);

  // Agora specific calculations
  const yearSinceGenesis = Math.floor(epochNum / epochPerYear);
  const firstYearValRewards = 7 * (avgSecInYear / 5);
  let yearlyReward = firstYearValRewards;
  for (let y = yearSinceGenesis; y > 0; y -= 1) {
    yearlyReward = (yearlyReward * 98_653) / 100_000;
  }

  return yearlyReward / totalAtStake;
};

export enum RewardPeriod {
  DAY = 0,
  WEEK = 1,
  MONTH = 2,
  YEAR = 3,
  EPOCH = 4,
}

/**
 * Enter EPOCH to calculate rewards
 * @param numNewValidator Number of validators to be added
 * @param totalValidatorBalance Sum of balances of all validators (unit is BOA) : use in totalvalidatorbalance
 * @param period
 */
export const getReward = (
  epoch: number,
  numNewValidator: number,
  totalValidatorBalance: number,
  period: RewardPeriod
): number => {
  const SLOTS_PER_EPOCH = 32; //  number of slots per epoch
  const SECONDS_PER_SLOT = 12; //  seconds in which one slot is created
  const SECONDS_PER_EPOCH = SLOTS_PER_EPOCH * SECONDS_PER_SLOT; //  seconds in which the epoch is created
  const DaysOfSec = 24 * 60 * 60;
  const WeeksOfSec = 7 * 24 * 60 * 60;
  const MonthsOfSec = 30 * 24 * 60 * 60;
  const YearsOfSec = 365 * 24 * 60 * 60;
  const MinValidator = 1024;
  const DepositAmount = 40_000;
  const MinValidatorAmount = MinValidator * DepositAmount;

  // Calculate how many seconds have passed since Agora-CL started
  let secondsSinceGenesis = epoch * SECONDS_PER_EPOCH;
  if (secondsSinceGenesis < 0) secondsSinceGenesis = 0;

  // Calculate how many years have passed since Agora-CL started
  const currentYear = Math.floor(secondsSinceGenesis / YearsOfSec);

  // Calculate the annual reward for the current year.
  const firstYearValRewards = 7 * (YearsOfSec / 5);
  let currentYearReward = firstYearValRewards;

  for (let i = currentYear; i > 0; i--) {
    currentYearReward = (currentYearReward * 98653) / 100000;
  }

  // Calculate rewards per second.
  const rewardPerSecond = currentYearReward / YearsOfSec;
  // Calculate the reward per epoch.
  const rewardPerEpoch = rewardPerSecond * SECONDS_PER_EPOCH;

  // Calculate the amount the user will stake.
  const userStake = numNewValidator * 40_000;

  //  Calculate the total staking amount.
  let totalStake = totalValidatorBalance + userStake;
  if (totalStake < MinValidatorAmount) totalStake = MinValidatorAmount;

  // Calculate the user's reward per epoch.
  const baseReward = (userStake * rewardPerEpoch) / totalStake;

  // Calculate the total number of epochs.
  let numEpoch = 0;
  if (period === RewardPeriod.DAY) {
    numEpoch = Math.floor(DaysOfSec / SECONDS_PER_EPOCH);
  } else if (period === RewardPeriod.WEEK) {
    numEpoch = Math.floor(WeeksOfSec / SECONDS_PER_EPOCH);
  } else if (period === RewardPeriod.MONTH) {
    numEpoch = Math.floor(MonthsOfSec / SECONDS_PER_EPOCH);
  } else if (period === RewardPeriod.YEAR) {
    numEpoch = Math.floor(YearsOfSec / SECONDS_PER_EPOCH);
  } else if (period === RewardPeriod.EPOCH) {
    numEpoch = 1;
  }

  // Calculate the reward for the entered period.
  return Math.floor(baseReward * numEpoch * 100) / 100;
};
