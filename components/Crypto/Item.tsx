import Image from 'next/image';
import { useMemo } from 'react';
import { Cryptos } from '../../utils/web3';

interface Props {
  crypto: string;
  imageType?: string;
}

const CryptoItem: React.FC<Props> = ({
  crypto,
  imageType = 'small',
}: Props) => {
  const cryptoData = useMemo(
    () => Cryptos.find((item) => item.name === crypto),
    [crypto]
  );

  return (
    <>
      {cryptoData && (
        <>
          <div
            className={
              imageType === 'small'
                ? `relative w-[16px] h-[16px]`
                : `relative w-[24px] h-[24px]`
            }
          >
            <Image
              src={cryptoData.logoPath}
              alt={cryptoData.name}
              width={32}
              height={32}
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
