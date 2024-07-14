import { CryptoData } from "@/app/components/CryptoData";
import { GeccoRef } from "@/app/components/ui/GeccoRef";
import { VotingButton } from "@/app/components/ui/VotingButton";

interface CryptoPageProps {
  crypto: string;
  price: number;
  votes: { bullish: number; bearish: number };
  cryptoKey: string;
}

export default function CryptoPage({
  crypto,
  price,
  votes,
  cryptoKey,
}: CryptoPageProps) {
  return (
    <div>
      <div>
        <CryptoData price={price} crypto={crypto} />
      </div>
      <div>
        <VotingButton crypto={cryptoKey} votes={votes} />
      </div>
      <div className="absolute bottom-2 left-2">
        <GeccoRef />
      </div>
    </div>
  );
}
