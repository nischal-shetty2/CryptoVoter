import { fetchCryptoData } from "@/app/util/fetchCryptoData";
import CryptoPage from "@/app/components/CryptoPage";
import { ethSchema } from "@/app/models/dbSchema";

export default async function Ethereum() {
  try {
    const { votes, price } = await fetchCryptoData(ethSchema, "ethereum");
    return (
      <CryptoPage
        crypto="Ethereum"
        price={price}
        votes={votes}
        cryptoKey="eth"
      />
    );
  } catch (e: any) {
    return (
      <div className="absolute left-0 top-10">
        Failed to fetch Ethereum data. Please try again later. {e.message}
      </div>
    );
  }
}
