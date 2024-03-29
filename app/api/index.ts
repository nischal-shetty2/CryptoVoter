import axios from "axios";

export async function getPrice() {
  // const response = await axios.get(process.env.API!);
  
  //Example Data
  const response = {
    data: {
      bitcoin: {
        usd: 70368.52,
      },
      ethereum: {
        usd: 3565.58,
      },
      solana: {
        usd: 186.14,
      },
    },
  };
  return response.data;
}
