import React, { useContext, useState } from 'react';
import { SwapInfo } from '../utils/web3';

export interface SwapContextValues {
  input: SwapInfo;
  setInput: (newInput: SwapInfo) => void;
}

const SwapContext: React.Context<null | SwapContextValues> =
  React.createContext<null | SwapContextValues>(null);

export function SwapProvider({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState<SwapInfo>({
    crypto: 'ETH',
    amount: '1',
  });

  return (
    <SwapContext.Provider
      value={{
        input,
        setInput,
      }}
    >
      {children}
    </SwapContext.Provider>
  );
}

export function useSwapCtx(): SwapContextValues {
  const context = useContext(SwapContext);
  if (!context) {
    throw new Error('Missing swap context');
  }
  return context;
}
