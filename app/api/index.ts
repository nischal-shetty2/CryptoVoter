"use server";
import axios from "axios";
import NodeCache from "node-cache";

// Initialize cache (cache for 10 minutes)
const priceCache = new NodeCache({ stdTTL: 600, checkperiod: 620 });

export async function getPrice() {
  const cacheKey = "cryptoPrices";

  // Check if data is already in cache
  const cachedData = priceCache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  // If not cached, fetch from the API
  try {
    const response = await axios.get(process.env.API!, {
      headers: {
        accept: "application/json",
        "x-cg-api-key": process.env.COINGECKO_API_KEY!,
      },
    });

    // Cache the API response
    priceCache.set(cacheKey, response.data);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch crypto prices");
  }
}

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
