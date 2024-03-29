"use client";
import axios from "axios";
import React, { useState } from "react";
import { Chart } from "./Chart";

export function VotingButton({
  crypto,
  votes,
}: {
  crypto: string;
  votes: { bullish: number; bearish: number };
}) {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [voted, setVoted] = useState(false);

  async function handleClick(direction: string) {
    const date = new Date().getDate();
    if (date === parseInt(localStorage.getItem(crypto)!)) {
      setVoted(true);
      setDisabled(true);
      return;
    }
    localStorage.setItem(crypto, `${date}`);

    let bullishValue = 0;
    let bearishValue = 0;

    if (direction === "bullish") {
      bullishValue = 1;
    } else if (direction === "bearish") {
      bearishValue = 1;
    }

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE}/api/${crypto}`, {
        bullish: bullishValue,
        bearish: bearishValue,
      });
    } catch (e) {
      setError(true);
    }

    setDisabled(true);
  }

  function ErrorAlert({ title, message }: { title: string; message: string }) {
    return (
      <div
        className=" bg-white z-50 bg-opacity-80  border flex flex-col border-red-400 text-red-700 pr-24 pl-5 py-3 rounded max-w-xl absolute bottom-10 left-5"
        role="alert">
        <strong className="font-bold">{title}</strong>
        <span className="block sm:inline">{message}</span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <div
            onClick={() => {
              setError(false);
              setVoted(false);
            }}>
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </div>
        </span>
      </div>
    );
  }

  return (
    <div>
      <div>
        {error ? (
          <ErrorAlert title={"uh oh!"} message={"Couldnt Post votes"} />
        ) : null}
      </div>
      <div>
        {voted ? (
          <ErrorAlert
            title={"Cannot vote again!"}
            message={"You only get to vote once Every Day"}
          />
        ) : null}
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between w-3xl mx-5 xs:mx-10 sm:flex sm:justify-center">
          <div className="sm:mx-10">
            <button
              className={`relative hover:opacity-95 inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
                disabled ? "opacity-50" : ""
              }`}
              disabled={disabled}
              onClick={async () => {
                await handleClick("bullish");
              }}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#17F702_0%,#1174D6_50%,#17F702_100%)]" />
              <span className="text-xl inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-12 py-4 font-medium text-white backdrop-blur-3xl">
                Bullish
              </span>
            </button>
          </div>
          <div className="sm:mx-10">
            <button
              className={`relative inline-flex h-12 hover:opacity-95 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${
                disabled ? " opacity-50" : ""
              }`}
              disabled={disabled}
              onClick={async () => {
                await handleClick("bearish");
              }}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FC0307_0%,#691DDB_50%,#FC0307_100%)]" />
              <span className="text-xl inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-10 py-4 font-medium text-white backdrop-blur-3xl">
                Bearish
              </span>
            </button>
          </div>
        </div>

        <div className=" flex justify-center">
          <Chart
            bullish={votes.bullish}
            bearish={votes.bearish}
            visible={disabled || voted}
          />
        </div>
      </div>
    </div>
  );
}
