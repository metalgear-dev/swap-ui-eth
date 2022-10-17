import { ethers } from 'ethers';
import { useQuery } from 'react-query';
import { useSwapCtx } from '../providers/SwapProvider';
import { SUSHISWAP_ROUTER } from '../utils/constants';
import {
  convertToReadable,
  convertToUint,
  getCurrentLiquidity,
  SwapInfo,
} from '../utils/web3';
import { useConnection } from './useConnection';

export const useSwap = () => {
  const { input } = useSwapCtx();
  const sushiContractABI = [
    'function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut)',
    'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)',
  ];
  const connection = useConnection();

  return useQuery<SwapInfo>(
    ['Sushi trade', input.crypto, input.amount],
    async () => {
      const outputCrypto = input.crypto === 'ETH' ? 'USDC' : 'ETH';
      let outputAmount = '0';
      if (connection.data) {
        const { provider } = connection.data;
        try {
          const sushiContract = new ethers.Contract(
            SUSHISWAP_ROUTER,
            sushiContractABI,
            provider
          );

          const curLiquidity = await getCurrentLiquidity(
            input.crypto === 'ETH' ? 'ETH-USDC' : 'USDC-ETH'
          );
          let result = '0';
          if (curLiquidity) {
            result = await sushiContract.getAmountOut(
              convertToUint(input.amount, 18),
              convertToUint(curLiquidity[0], 18),
              convertToUint(curLiquidity[1], 18)
            );
          }

          outputAmount = convertToReadable(result);
        } catch (e) {
          console.error(e);
        }
      }
      return {
        crypto: outputCrypto,
        amount: outputAmount,
      };
    },
    {
      enabled: connection.isFetched,
    }
  );
};
