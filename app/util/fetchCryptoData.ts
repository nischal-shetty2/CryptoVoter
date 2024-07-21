import { getPrice } from "@/app/api";
import dbConnect from "@/app/util/dbConnect";
import { Model } from "mongoose";

export async function fetchCryptoData(schema: Model<any>, cryptoKey: string) {
  await dbConnect();
  if (cryptoKey === "solana") {
    const cryptoData = await schema.find({});
    return {
      votes: {
        bullish: cryptoData[0].bullish,
        bearish: cryptoData[0].bearish,
      },
    };
  }
  const cryptoData = await schema.find({});
  const priceData = await getPrice();

  return {
    price: priceData[cryptoKey].usd,
    votes: {
      bullish: cryptoData[0].bullish,
      bearish: cryptoData[0].bearish,
    },
  };
}
