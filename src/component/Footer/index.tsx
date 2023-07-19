function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-neutral-900 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 gap-3 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-200 sm:text-center dark:text-white">
          © 2023{" "}
          <a href="#" className="hover:underline">
            SwipeSurve™
          </a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 dark:text-neutral-100 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/biomathcode"
              className="hover:underline"
            >
              Created By biomathcode
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
