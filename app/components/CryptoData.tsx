"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { BtcLogo, EthLogo, SolLogo } from "./ui/cryptoLogos";

interface DataTypes {
  price: number;
  crypto: string;
}

export function CryptoData({ price, crypto }: DataTypes) {
  const renderLogo = () => {
    switch (crypto) {
      case "Bitcoin":
        return <BtcLogo width={150} height={150} />;
      case "Ethereum":
        return <EthLogo width={150} height={150} />;
      case "Solana":
        return <SolLogo width={150} height={150} />;
      default:
        return null;
    }
  };

  return (
    <CardContainer className=" mt-20 inter-var hover:shadow rounded-xl hover:shadow-purple-300 hover:opacity-80">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto min-w-3xl h-auto rounded-xl px-10 py-3 border">
        <div className="flex justify-between">
          <div className="flex">
            <CardItem
              translateZ="100"
              rotateX={5}
              rotateZ={-5}
              className=" flex justify-center">
              {renderLogo()}
            </CardItem>
            <div>
              <div className="text-3xl font-bold text-neutral-600 dark:text-white mt-8">
                <div>{crypto}</div>
              </div>
              <div className="text-3xl font-light text-neutral-600 dark:text-white">
                ${price.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
}
