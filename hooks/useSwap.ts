import { ethers } from 'ethers';
import { useQuery } from 'react-query';
import { SUSHISWAP_ROUTER } from '../utils/constants';
import { getCurrentLiquidity, SwapInfo } from '../utils/web3';
import { useConnection } from './useConnection';
import { useInput } from './useInput';

export const useSwap = () => {
  const { input } = useInput();
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
              1,
              curLiquidity[0],
              curLiquidity[1]
            );
          }
          console.log(result.toString());

          outputAmount = result.toString();
        } catch (e) {
          console.log('ERROR OCCURED');
          // console.error(e);
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
