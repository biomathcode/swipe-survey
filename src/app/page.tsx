import Image from "next/image";
import DecisionChart from "../../component/DecisionChart";
import Header from "../../component/Header";
import { Traffics } from "../../component/Traffic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black ">
      <Header />
      <div> Swipe here</div>
      <iframe
        src="https://codesandbox.io/embed/swipe-surveys-veuxl?fontsize=14&hidenavigation=1&theme=dark"
        style={{
          width: "100%",
          height: "500px",
          border: 0,
          borderRadius: "4px",
          overflow: "hidden",
        }}
        title="Swipe Surveys"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>

      <Traffics traffic={["red", "yellow", "green"]} />
      {/* <DecisionChart /> */}
    </main>
  );
}
