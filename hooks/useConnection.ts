import { ethers } from 'ethers';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getWalletAddress, notify } from '../utils/basic';

export type Connection = {
  provider: ethers.providers.Web3Provider;
  wallet: string;
};
export const useConnection = () => {
  return useQuery<Connection | undefined>(
    ['connection'],
    async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const walletAddress = await getWalletAddress(provider);
        return {
          provider,
          wallet: walletAddress,
        };
      } else {
        notify('Please install metamask');
      }
    },
    {
      retry: 0,
    }
  );
};
