import Header from "@/component/Header";
import Swiper from "@/component/Swiper";

function Solutions() {
  const questions = [
    {
      id: 241,
      content: "Hello",
    },
    {
      id: 3242,
      content: "Second",
    },
    {
      id: 9293,
      content: "third",
    },
  ];
  return (
    <>
      <Header />
      <div>How can Swipe Survey is a solution to your problem ?</div>
      <Swiper questions={questions} isPreview={true} />
    </>
  );
}

export default Solutions;
