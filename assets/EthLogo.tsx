import Image from 'next/image';

const EthLogo = () => (
  <Image
    src="/ethereum-eth-logo.png"
    alt="eth-logo"
    width={16}
    height={12}
    layout="intrinsic"
  />
);

export default EthLogo;
