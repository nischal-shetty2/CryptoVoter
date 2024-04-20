import { Coins } from "./components/Coins";
import { GeccoRef } from "./components/ui/GeccoRef";
import { NavBar } from "./components/ui/NavBar";

export default async function Home() {
  return (
    <div className="bg-gradient-to-b from-black from-30% via-violet-950 via-60% to-violet-300 rounded-b-3xl sm:bg-gradient-to-br sm:from-black sm:from-30% sm:via-violet-950 sm:via-60% sm:to-violet-300 sm:rounded-b-3xl ">
      <NavBar />
      <div>
        <Coins />
      </div>
    </div>
  );
}
