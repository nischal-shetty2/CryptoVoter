import { fetchCryptoData } from "@/app/util/fetchCryptoData";
import CryptoPage from "@/app/components/CryptoPage";
import { btcSchema } from "@/app/models/dbSchema";

export default async function Bitcoin() {
  try {
    const data = await fetchCryptoData(btcSchema, "bitcoin");
    return (
      <CryptoPage
        crypto="Bitcoin"
        price={data.price}
        votes={data.votes}
        cryptoKey="btc"
      />
    );
  } catch (e: any) {
    return (
      <div className="absolute left-0 top-10">
        Failed to fetch Bitcoin data. Please try again later. {e.message}
      </div>
    );
  }
}
