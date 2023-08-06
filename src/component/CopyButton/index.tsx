import { useState } from "react";

type CopyButtonType = {
  link: string;
};

function CopyButton({ link }: CopyButtonType) {
  const [loading, setLoading] = useState(false);

  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex gap-2">
      <input
        defaultValue={link}
        readOnly
        className="shadow w-96 appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
      />

      <button
        className=" bg-neutral-200 text-neutral-900 inline-block h-[35px] px-2 py-1 rounded"
        onClick={() => handleCopy(link)}
      >
        {loading ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default CopyButton;
