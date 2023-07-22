import Footer from "@/component/Footer";
import Header from "@/component/Header";

function License() {
  return (
    <>
      <Header />
      <div className="markdown-body max-w-lg px-4 py-2">
        <h1>License </h1>
        <p>
          Swipe-survey is an open source project create by Pratik
          Sharma[sharma.pratik@gmail.com]. The project is hosted on vercel and
          the code is open-sourced on github.
        </p>
        <p>Contributions are open and appreciated. 🙌🏻</p>
        <p>
          You can also give feedback, or ask for more features. To do that
          create a new issue on github starting with <code>Feature:</code>{" "}
          followed by the feature request.
        </p>
        <a href="https://github.com/biomathcode/swipe-survey">
          Github Repository Link
        </a>

        <p>@MIT License</p>
      </div>
      <Footer />
    </>
  );
}

export default License;
