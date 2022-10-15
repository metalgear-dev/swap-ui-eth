import Link from 'next/link';
import { shortenAddress } from '../../utils/basic';

interface Props {
  pubkey: string;
  customClass?: string;
}

export const PubkeyLink = ({ pubkey, customClass }: Props) => (
  <Link href={`https://explorer.solana.com/address/${pubkey}`}>
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={
        'text-sm font-normal block whitespace-nowrap bg-transparent text-blueGray-700 w-full mb-1' +
        (customClass ? ` ${customClass}` : '')
      }
    >
      {shortenAddress(pubkey)}
    </a>
  </Link>
);
