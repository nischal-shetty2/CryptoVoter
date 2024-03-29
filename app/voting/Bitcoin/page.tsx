import { getPrice } from "@/app/api/route";
import { CryptoData } from "@/app/components/CryptoData";
import { GeccoRef } from "@/app/components/ui/GeccoRef";
import { VotingButton } from "@/app/components/ui/VotingButton";
import axios from "axios";

export default async function Bitcoin() {
  const voteData = await axios.get(`${process.env.NEXT_PUBLIC_BASE}/api/btc`);
  const votes = voteData.data;
  const price = await getPrice();

  return (
    <div>
      <div>
        <CryptoData price={price.bitcoin.usd} crypto="Bitcoin" />
      </div>
      <div>
        <VotingButton crypto="btc" votes={votes} />
      </div>
      <div className=" absolute bottom-2 left-2">
        <GeccoRef />
      </div>
    </div>
  );
}
