import Image from 'next/image';
import { useMemo } from 'react';
import { Cryptos } from '../../utils/web3';

interface Props {
  crypto: string;
  imageSize?: number;
}

const CryptoItem: React.FC<Props> = ({ crypto, imageSize = 16 }: Props) => {
  const cryptoData = useMemo(
    () => Cryptos.find((item) => item.name === crypto),
    [crypto]
  );

  return (
    <>
      {cryptoData && (
        <>
          <div className={`relative w-[${imageSize}px] h-[${imageSize}px]`}>
            <Image
              src={cryptoData.logoPath}
              alt={cryptoData.name}
              layout="fill"
            />
          </div>
          <label className={`ml-2 mb-[2px]`}>{cryptoData.name}</label>
        </>
      )}
    </>
  );
};

export default CryptoItem;
