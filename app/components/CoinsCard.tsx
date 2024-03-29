"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { BtcLogo, EthLogo, SolLogo } from "./ui/cryptoLogos";
import { useRouter } from "next/navigation";
interface cardTypes {
  price: number;
  crypto: string;
}

export function CoinsCard({ price, crypto }: cardTypes) {
  const router = useRouter();
  const renderLogo = () => {
    switch (crypto) {
      case "Bitcoin":
        return <BtcLogo />;
      case "Ethereum":
        return <EthLogo />;
      case "Solana":
        return <SolLogo />;
      default:
        return null; // Return null if crypto prop doesn't match any case
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
        <CardItem
          translateZ={10}
          translateX={5}
          as="button"
          className=" mt-12 px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-light hover:text-white hover:bg-zinc-950">
          <a href="https://www.coingecko.com/" target="_blank">
            chart
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
