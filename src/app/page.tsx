import Image from "next/image";
import { Header } from "./components/header/header";

export default function Home() {
  return (
    <div className="min-h-full flex flex-col p-4 md:p-8 xl:p-12 min-w-80 max-w-[1440px]">
      <Header />
      <main className="flex-[1_1_auto]">main</main>
      <footer>footer</footer>
    </div>
  );
}
