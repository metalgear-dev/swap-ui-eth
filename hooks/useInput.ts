import { useState } from 'react';
import { SwapInfo } from '../utils/web3';

export const useInput = () => {
  const [input, setInput] = useState<SwapInfo>({
    crypto: 'ETH',
    amount: '1',
  });

  return {
    input,
    setInput,
  };
};
