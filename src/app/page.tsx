import Image from "next/image";
import DecisionChart from "../../component/DecisionChart";
import Header from "../../component/Header";
import { Traffics } from "../../component/component/Traffic";
import Swiper from "../../component/Swiper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black ">
      <Header />
      <div> Swipe here</div>
    </main>
  );
}
