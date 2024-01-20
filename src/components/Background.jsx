const Background = () => {
  return (
    <>
      <div className="relative z-0 min-h-screen w-full">
        <div className="w-full p-10 flex items-center justify-center absolute z-[1] top-10">
          <h1 className="text-xl text-zinc-700 font-bold">Documents</h1>
        </div>
        <div className="absolute top-0 left-0  w-full min-h-full bg-zinc-800">
          <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-600 text-[13vw] font-bold">
            Docs.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Background;
