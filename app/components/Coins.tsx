import { getPrice } from "../api/route";
import { CoinsCard } from "./CoinsCard";

export const Coins = async () => {
  try {
    const price = await getPrice();

    return (
      <div className="xl:flex xl:justify-between xl:px-16">
        <div>
          <div className="h-screen flex justify-center">
            <CoinsCard price={price.bitcoin.usd} crypto="Bitcoin" />
          </div>
        </div>
        <div className="h-screen flex justify-center">
          <CoinsCard price={price.ethereum.usd} crypto="Ethereum" />
        </div>
        <div className="h-screen flex justify-center">
          <CoinsCard price={price.solana.usd} crypto="Solana" />
        </div>
      </div>
    );
  } catch (e: any) {
    return <div>{e}</div>;
  }
};
