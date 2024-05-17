import { getPrice } from "@/app/api";
import { CryptoData } from "@/app/components/CryptoData";
import { GeccoRef } from "@/app/components/ui/GeccoRef";
import { VotingButton } from "@/app/components/ui/VotingButton";
import { solSchema } from "@/app/models/dbSchema";
import dbConnect from "@/app/util/dbConnect";

export default async function Solana() {
  try {
    await dbConnect();
    const btcData = await solSchema.find({});
    const votes = {
      bullish: btcData[0].bullish,
      bearish: btcData[0].bearish,
    };
    const price = await getPrice();
    const tempPrice = 167.23;
    return (
      <div>
        <div>
          <CryptoData price={tempPrice} crypto="Solana" />
        </div>
        <div>
          <VotingButton crypto="sol" votes={votes} />
        </div>
        <div className=" absolute bottom-2 left-2">
          <GeccoRef />
        </div>
      </div>
    );
  } catch (e: any) {
    return (
      <div className=" absolute left-0 top-10">
        Failed to fetch Solana data. Please try again later.
      </div>
    );
  }
}
