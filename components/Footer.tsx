import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-center border-t sm:h-15 w-full sm:pt-2 pt-2 flex sm:flex-row flex-col justify-between items-center px-3 space-y-2 sm:mb-0 dark:bg-black-900 dark:text-gray-100 mb-1"
      style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <div>
        Built with 💗 by{" "}
        <Link
          href="https://twitter.com/olanetsoft"
          className="font-bold hover:underline transition underline-offset-2"
          aria-label="Olanetsoft on Twitter"
        >
          Olanetsoft
        </Link>{" "}
        &{" "}
        <Link
          href="https://twitter.com/iam_kelvinjnr"
          className="font-bold hover:underline transition underline-offset-2"
          aria-label="Kelvin Chibueze on Twitter"
        >
          Kelvin.
        </Link>{" "}
        Inspired by{" "}
        <Link
          href="https://twitter.com/nutlope"
          className="font-bold hover:underline transition underline-offset-2"
          aria-label="TaxPal on Twitter"
        >
          {" "}
          Nutlope,
        </Link>{" "}
        Powered by{" "}
        <a
          href="https://openai.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          OpenAI.{" "}
        </a>
      </div>
    </footer>
  );
}
