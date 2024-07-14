import { fetchCryptoData } from "@/app/util/fetchCryptoData";
import CryptoPage from "@/app/components/CryptoPage";
import { solSchema } from "@/app/models/dbSchema";

export default async function Solana() {
  try {
    const data = await fetchCryptoData(solSchema, "solana");
    return (
      <CryptoPage
        crypto="Solana"
        price={data.price}
        votes={data.votes}
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
