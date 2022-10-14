import Head from 'next/head';
import { ReactNode } from 'react';
import EthLogo from '../assets/EthLogo';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-screen bg-neutral-800">
        <Navbar />

        <section className="header relative pt-16 flex grow">
          {children}
        </section>

        <footer
          className={`${styles.footer} flex-none bg-neutral-900 shadow-lg`}
        >
          <div className="container flex justify-between w-full">
            <div className="flex">
              <div className="mr-2 radius-lg bg-neutral-100 w-[24px] h-[24px] p-[2px] rounded-full flex justify-center">
                <EthLogo />
              </div>
              Powered by Ethereum blockchain
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
