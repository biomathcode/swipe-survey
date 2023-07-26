import { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/component/Header";
import {
  DashIcon,
  DashboardIcon,
  FileTextIcon,
  HamburgerMenuIcon,
  HandIcon,
  IconJarLogoIcon,
  PaperPlaneIcon,
  PersonIcon,
  PieChartIcon,
} from "@radix-ui/react-icons";

type CounterType = "responses" | "questions" | "users" | "surveys";

const StatsDisplay = () => {
  const [count, setCounter] = useState({
    responses: 0,
    questions: 0,
    users: 0,
    surveys: 0,
  });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await axios.get("/api/admin");

    console.log(response.data);

    setCounter(response.data.data.rows[0]);
    return response.data;
  }

  const Icon = {
    responses: <HandIcon />,
    users: <PersonIcon />,
    surveys: <PieChartIcon />,
    questions: <DashboardIcon />,
  };

  return Object.keys(count).map((el, i) => (
    <div
      key={i}
      className="rounded-xl border bg-card text-card-foreground shadow"
    >
      <div className="p-6 flex flex-row gap-4 items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">
          {el.toUpperCase()}:
        </h3>
        <div className="h-4 w-4 text-muted-foreground">
          {Icon[el as keyof typeof Icon]}
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">
          {count[el as keyof typeof count]}
        </div>
      </div>
    </div>
  ));
};

function AdminPortal() {
  return (
    <>
      <Header />
      <div className="flex flex-col mt-10 gap-4">
        <div className="text-3xl font-bold tracking-tight">Admin Portal</div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsDisplay />
        </div>
      </div>
    </>
  );
}

export default AdminPortal;
