import Header from "@/component/Header";
import Image from "next/image";

function EmptyState() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center content-center">
      <Header />
      <Image src={"/404.png"} width={400} height={500} alt="Page not Found" />
      <p className="text-2xl">404: Page Not Found</p>
      <button className=" bg-neutral-900 text-white px-3 rounded py-2 text-sm flex gap-2 items-center justify-center">
        Go Home
      </button>
    </div>
  );
}

export default EmptyState;
