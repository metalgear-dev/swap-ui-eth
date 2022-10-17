import { LoadingSpinner } from '../common/LoadingSpinner';
import { useSwap } from '../hooks/useSwap';
import { useSwapCtx } from '../providers/SwapProvider';
import { CryptoDropdown } from './Crypto/Dropdown';
import CryptoItem from './Crypto/Item';

const Swap: React.FC = () => {
  const { input, setInput } = useSwapCtx();
  const output = useSwap();

  return (
    <div className="mx-auto w-[500px] h-[400px] rounded-2xl">
      <div className="flex flex-col h-full">
        <div className="uppercase h-1/2 rounded-t-2xl bg-neutral-700 p-5">
          <span className="font-bold">Swap</span>
          <div className="flex justify-between mt-5">
            <div className="text-3xl flex justify-center items-center">
              <input
                className="bg-transparent focus:outline-none max-w-[300px]"
                type="number"
                value={input.amount}
                onChange={(e) => {
                  setInput({
                    crypto: input.crypto,
                    amount: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <CryptoDropdown
                input={input}
                onSelect={(crypto) => {
                  setInput({
                    crypto,
                    amount: input.amount,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className="uppercase h-1/2 rounded-b-2xl bg-neutral-900 p-5">
          <span className="font-bold">output</span>
          <div className="flex justify-between mt-5">
            {output.isFetched && output.data ? (
              <>
                <div className="text-3xl flex justify-center items-center">
                  {output.data.amount}
                </div>
                <div>
                  <button
                    onClick={() => {}}
                    className="px-4 py-2 bg-neutral-800 rounded-full flex justify-center items-center text-2xl"
                  >
                    <CryptoItem
                      crypto={output.data.crypto}
                      imageType="medium"
                    />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex justify-center w-full">
                <LoadingSpinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;
