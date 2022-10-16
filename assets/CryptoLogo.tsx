import Image from 'next/image';

const CryptoLogo = (path: string) => (
  <Image src={path} alt="eth-logo" width={16} height={12} layout="intrinsic" />
);

export default CryptoLogo;
