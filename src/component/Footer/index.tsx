import Link from "next/link";

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
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/license" className="mr-4 hover:underline md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <a
              target="_blank"
              href="https://twitter.com/biomathcode mr-4"
              className="hover:underline"
            >
              Created By biomathcode
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://vercel.com"
              className="hover:underline ml-4"
            >
              Deployed on ▲ Vercel
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://tidbcloud.com/"
              className="hover:underline ml-4"
            >
              Powered by TiDB
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
