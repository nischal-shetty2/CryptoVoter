import { NavBar } from "../components/ui/NavBar";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="  bg-gradient-to-b from-black from-30% via-violet-950 via-60% to-violet-300 rounded-3xl sm:bg-gradient-to-br sm:from-black sm:from-30% sm:via-violet-950 sm:via-60% sm:to-violet-300 sm:rounded-3xl h-screen">
        <div>
          <NavBar />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
