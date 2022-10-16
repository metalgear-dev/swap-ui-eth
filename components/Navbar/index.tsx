import Link from 'next/link';
import { useConnection } from '../../hooks/useConnection';
import { shortenAddress } from '../../utils/basic';
import { WalletButton } from './WalletButton';

const Navbar: React.FC = () => {
  const connection = useConnection();
  const connectWallet = () => {
    if (connection.isFetched) {
      connection.refetch();
    }
  };

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-neutral-900 shadow">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="#">
              <a className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                Swap
              </a>
            </Link>
          </div>
          <div
            className="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {connection.isFetched &&
              connection.data &&
              connection.data.wallet ? (
                <WalletButton
                  caption={shortenAddress(connection.data.wallet)}
                  handler={() => {}}
                />
              ) : (
                <WalletButton
                  caption="Connect Wallet"
                  handler={connectWallet}
                />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
