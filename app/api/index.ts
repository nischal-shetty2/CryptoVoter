"use server";
import axios from "axios";

export async function getPrice() {
  const response = await axios.get(process.env.API!, {
    headers: {
      accept: "application/json",
      "x-cg-api-key": process.env.COINGECKO_API_KEY!,
    },
  });
  //Structure of response
  // const response = {
  //   data: {
  //     bitcoin: {
  //       usd: 70368.52,
  //     },
  //     ethereum: {
  //       usd: 3565.58,
  //     },
  //     solana: {
  //       usd: 170.14,
  //     },
  //   },
  // };
  return response.data;
}
