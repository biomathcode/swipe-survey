function Footer() {
  return (
    <footer
      style={{
        position: "static",
        bottom: "0px",
        width: "100vw",
        height: "fit-content",
      }}
      className="flex flex-col md:flex-row justify-betweeen bg-neutral-900 text-white"
    >
      <div title="Footer section one" className="flex flex-col">
        <h1 className="">Features</h1>
        <div>Survey</div>
        <div>Analytics</div>
        <div>Widgets</div>
      </div>

      <div className="flex flex-col" title="footer section two">
        <div>Privacy Policy</div>
        <div>Term Conditions</div>
        <div>about</div>
      </div>
    </footer>
  );
}

export default Footer;
