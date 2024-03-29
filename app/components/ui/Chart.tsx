import React from "react";

export function Chart({
  bullish,
  bearish,
  visible,
}: {
  bullish: number;
  bearish: number;
  visible?: boolean;
}) {
  if (!visible) {
    return null;
  }

  const total = bullish + bearish;
  const bullishPercentage = (bullish / total) * 100;
  const bearishPercentage = (bearish / total) * 100;

  return (
    <div className=" w-screen sm:px-20 sm:py-10 px-10 my-10 sm:my-0 ">
      <h2 className="flex justify-center scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Bullish
      </h2>
      <div className="mb-3 flex justify-center">
        <div
          className={`bg-green-500 py-5 rounded-lg  opacity-70 hover:opacity-100 transition-opacity ease-in-out duration-500 `}
          style={{ width: `${bullishPercentage}%` }}>
          <div className="flex justify-center font-semibold">
            {bullishPercentage.toFixed(2)}%
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Bearish
        </h2>
      </div>
      <div className="mt-3 flex justify-center">
        <div
          className="bg-red-500 py-5 rounded-lg  opacity-70 hover:opacity-100 transition-opacity ease-in-out duration-500"
          style={{ width: `${bearishPercentage}%` }}>
          <div className="flex justify-center font-semibold">
            {bearishPercentage.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
}
