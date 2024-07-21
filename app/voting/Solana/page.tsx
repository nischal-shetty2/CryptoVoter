import { fetchCryptoData } from "@/app/util/fetchCryptoData";
import CryptoPage from "@/app/components/CryptoPage";
import { solSchema } from "@/app/models/dbSchema";
import axios from "axios";

export default async function Solana() {
  try {
    const { data } = await axios.get(
      "https://api.diadata.org/v1/assetQuotation/Solana/0x0000000000000000000000000000000000000000"
    );
    const { votes } = await fetchCryptoData(solSchema, "solana");
    return (
      <CryptoPage
        crypto="Solana"
        price={data.Price}
        votes={votes}
        cryptoKey="sol"
      />
    );
  } catch (e: any) {
    return (
      <div className="absolute left-10 top-40">
        Failed to fetch Solana data. Please try again later. {e.message}
      </div>
    );
  }
}
