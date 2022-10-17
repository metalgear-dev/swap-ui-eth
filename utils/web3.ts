import { ethers } from 'ethers';

export type Crypto = {
  name: string;
  logoPath: string;
};

export type SwapInfo = {
  crypto: string;
  amount: string;
};

export const Cryptos: Crypto[] = [
  {
    name: 'ETH',
    logoPath: '/cryptos/eth.svg',
  },
  {
    name: 'USDC',
    logoPath: '/cryptos/usdc.svg',
  },
];

// get fake liquidity
export const getCurrentLiquidity = async (
  poolType: string
): Promise<number[] | null> => {
  switch (poolType) {
    case 'ETH-USDC':
      return [100000, 130262000];
    case 'USDC-ETH':
      return [130262000, 100000];
    default:
      return null;
  }
};

export const convertToUint = (
  inputValue: number | string,
  decimals = 18
): ethers.BigNumber => ethers.utils.parseUnits(`${inputValue}`, decimals);

export const convertToReadable = (
  input: string,
  decimals = 18,
  precision = 3
): string =>
  parseFloat(ethers.utils.formatUnits(input, decimals)).toFixed(precision);
