const Swap: React.FC = () => {
  return (
    <div className="mx-auto w-[500px] h-[500px] rounded-2xl">
      <div className="flex flex-col h-full">
        <div className="uppercase h-1/2 rounded-t-2xl bg-neutral-700 p-5">
          <span className="font-bold">Swap</span>
        </div>
        <div className="uppercase h-1/2 rounded-b-2xl bg-neutral-900 p-5">
          Lower
        </div>
      </div>
    </div>
  );
};

export default Swap;
