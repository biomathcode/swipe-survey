//

import { useRouter } from "next/router";
import { useEffect } from "react";

function SurveyView() {
  const router = useRouter();

  console.log(router.query.id);

  const id = router.query.id;

  useEffect(() => {
    console.log("fetch id"); // get survey data
  }, [id]);
  return (
    <div>
      <div>{router.query.id}</div>
    </div>
  );
}

export default SurveyView;
