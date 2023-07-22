import Footer from "@/component/Footer";
import Header from "@/component/Header";

function ChangeLogs() {
  return (
    <>
      <Header />
      <div
        className="markdown-body"
        style={{ width: "100vw", padding: "20px 20vw", marginBottom: "80px" }}
      >
        <h1
          style={{
            background: "white",
          }}
          id="changelog"
        >
          Changelog
        </h1>
        <h2 id="-0-1-1-2023-07-19">[0.1.1] - 2023-07-19</h2>
        <h3 id="added">Added</h3>
        <ul>
          <li>UI for delete, edit questions</li>
          <li>UI for delete, edit in survey</li>
        </ul>
        <h3 id="future-changes">Future Changes</h3>
        <ul>
          <li>We will not collect emails.</li>
          <li>We are moving towards complete anonymous</li>
          <li>We will collect data like device, country only</li>
        </ul>
        <h2 id="-0-1-1-2023-07-16">[0.1.1] - 2023-07-16</h2>
        <h3 id="added">Added</h3>
        <ul>
          <li>Implemented Github Auth</li>
          <li>Added TiDB support</li>
          <li>Added Survey Builder</li>
          <li>Added Analytics</li>
        </ul>
        <h3 id="fix">Fix</h3>
        <ul>
          <li>Added Update Date and Change Date</li>
          <li>Moved to Mysql from Postgres</li>
        </ul>
        <h2 id="-0-1-0-2023-07-13">[0.1.0] - 2023-07-13</h2>
        <h3 id="added">Added</h3>
        <ul>
          <li>Create CRUD for Survery, Question, Response, User</li>
          <li>Added Prisma Database</li>
          <li>Created Final Schema of the Data Modelling</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default ChangeLogs;
