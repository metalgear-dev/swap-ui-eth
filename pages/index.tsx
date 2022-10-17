import type { NextPage } from 'next';
import Swap from '../components/Swap';
import { SwapProvider } from '../providers/SwapProvider';
import Layout from './layout';

const Home: NextPage = () => {
  return (
    <Layout
      title="Ethereum Swap"
      description="Swap whatever you want for anything"
    >
      <div className="container mx-auto items-center flex flex-wrap">
        <SwapProvider>
          <Swap />
        </SwapProvider>
      </div>
    </Layout>
  );
};

export default Home;
