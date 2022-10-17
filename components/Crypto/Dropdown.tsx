import React, { useEffect, useState } from 'react';
import { Crypto, Cryptos, SwapInfo } from '../../utils/web3';
import Modal from '../Modal';
import CryptoItem from './Item';
import { TfiAngleDown } from 'react-icons/tfi';
import { useInput } from '../../hooks/useInput';

interface Props {
  input: SwapInfo;
  onSelect: (crypto: string) => void;
}

export const CryptoDropdown: React.FC<Props> = ({ input, onSelect }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-neutral-800 rounded-full flex justify-center items-center text-2xl"
      >
        <CryptoItem crypto={input.crypto} imageSize={24} />
        <TfiAngleDown className="text-sm ml-3" />
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Please select crypto"
      >
        <ul className="pr-8">
          {Cryptos.map((cryptoItem: Crypto, index: number) => (
            <React.Fragment key={`crypto-item-${index}`}>
              <li
                onClick={() => {
                  onSelect(cryptoItem.name);
                  setOpen(false);
                }}
                className="px-2 py-1 flex jutify-center items-center hover:bg-sky-800 rounded-md cursor-pointer"
              >
                <CryptoItem crypto={cryptoItem.name} />
              </li>
            </React.Fragment>
          ))}
        </ul>
      </Modal>
    </div>
  );
};
