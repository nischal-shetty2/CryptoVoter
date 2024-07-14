"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { BtcLogo, EthLogo, SolLogo } from "./ui/cryptoLogos";
import { useRouter } from "next/navigation";
interface cardTypes {
  price: number;
  crypto: string;
}

export function CoinsCard({ price, crypto }: cardTypes) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const renderLogo = () => {
    switch (crypto) {
      case "Bitcoin":
        return <BtcLogo />;
      case "Ethereum":
        return <EthLogo />;
      case "Solana":
        return <SolLogo />;
      default:
        return null;
    }
  };

  return (
    <CardContainer className="inter-var cursor-pointer hover:shadow rounded-xl hover:shadow-purple-300 hover:opacity-80">
      <CardBody className="bg-gray-50 relative group/card sm:max-w-sm max-w-xs dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <div
          onClick={() => {
            router.push(`/voting/${crypto}`);
          }}>
          <CardItem
            translateZ="100"
            rotateX={5}
            rotateZ={-5}
            className="w-full mt-4 flex justify-center">
            {renderLogo()}
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white mt-12">
            <div>{crypto}</div>
          </CardItem>
          <div className="text-lg font-light text-neutral-600 dark:text-white">
            ${price.toLocaleString()}
          </div>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Click here to vote on the market direction of {crypto} today.
          </CardItem>
        </div>
        <div className="flex justify-between">
          <CardItem
            translateZ={10}
            translateX={5}
            as="button"
            className=" mt-12 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-light hover:text-white hover:bg-zinc-950">
            <div className="flex">
              <a href="https://www.coingecko.com/" target="_blank">
                chart
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                <path
                  d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2"
                  fill="#666666"
                />
              </svg>
            </div>
          </CardItem>
          <CardItem
            translateZ={10}
            translateX={5}
            as="button"
            className=" mt-12 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-md font-normal hover:text-white hover:bg-zinc-950">
            {!loading ? (
              <div
                className="flex ml-2"
                onClick={() => {
                  setLoading(true);
                  router.push(`/voting/${crypto}`);
                }}>
                vote
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path
                    d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
                    fill="#666666"
                  />
                </svg>
              </div>
            ) : (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
