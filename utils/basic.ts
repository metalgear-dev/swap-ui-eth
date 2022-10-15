import toast, { DefaultToastOptions } from 'react-hot-toast';
import { ethers } from 'ethers';

export const notify = (
  message: string,
  description: string | undefined = undefined,
  type: string = 'error',
  duration: number = 3000
) => {
  const descriptionPart = description ? `\n${description}` : '';
  const content = `${message}${descriptionPart}`;
  const option: DefaultToastOptions = {
    position: 'top-right',
    duration,
  };
  if (type === 'error') {
    toast.error(content, option);
  } else {
    toast.success(content, option);
  }
};

export const getWalletAddress = async (
  provider: ethers.providers.Web3Provider
): Promise<string> => {
  if (provider) {
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const wallet = await signer.getAddress();
    return wallet;
  }
  return '';
};

export function shortenAddress(address: string, chars = 5): string {
  return `${address.substring(0, chars)}...${address.substring(
    address.length - chars
  )}`;
}
