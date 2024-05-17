import { getPrice } from "@/app/api";
import { CryptoData } from "@/app/components/CryptoData";
import { GeccoRef } from "@/app/components/ui/GeccoRef";
import { VotingButton } from "@/app/components/ui/VotingButton";
import { ethSchema } from "@/app/models/dbSchema";
import dbConnect from "@/app/util/dbConnect";

export default async function Ethereum() {
  try {
    await dbConnect();
    const btcData = await ethSchema.find({});
    const votes = {
      bullish: btcData[0].bullish,
      bearish: btcData[0].bearish,
    };
    const price = await getPrice();

    return (
      <div>
        <div>
          <CryptoData price={price.ethereum.usd} crypto="Ethereum" />
        </div>
        <div>
          <VotingButton crypto="eth" votes={votes} />
        </div>
        <div className=" absolute bottom-2 left-2">
          <GeccoRef />
        </div>
      </div>
    );
  } catch (e: any) {
    return (
      <div className=" absolute left-0 top-10">
        Failed to fetch Ethereum data. Please try again later.
        {e}
      </div>
    );
  }
}
