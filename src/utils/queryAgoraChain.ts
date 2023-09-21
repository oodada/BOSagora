import axios from "axios";

type AgoraChainResponse = {
  data: {
    status: string;
    data: {
      validatorscount: number;
      totalvalidatorbalance: number; // gwei
      epoch: number;
    };
  };
};

const DEPOSIT_OFFSET: number =
  Number(process.env.REACT_APP_ETH_DEPOSIT_OFFSET) || 0;
const AGORA_CHAIN_URL: string = process.env.REACT_APP_AGORA_CHAIN_URL || "";

export const queryAgoraChain = async () => {
  try {
    const response: AgoraChainResponse = await axios.get(
      `${AGORA_CHAIN_URL}/api/v1/epoch/latest`
    );
    let boaBalance = response.data.data.totalvalidatorbalance * 1e-9;
    boaBalance = Number(boaBalance.toFixed(0)) + DEPOSIT_OFFSET;
    return {
      statusCode: 200,
      body: {
        totalValidators: response.data.data.validatorscount,
        amountBOA: boaBalance,
        epochNum: response.data.data.epoch,
      },
    };
  } catch (error: any) {
    console.error(error);
    return {
      statusCode: 500,
      body: {
        totalValidators: 0,
        amountBOA: 0,
        epochNum: 0,
        msg: error.message,
      },
    };
  }
};
