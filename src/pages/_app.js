import "@/styles/globals.css";
import Link from 'next/link';
import Image from "next/image";

export default function App({ Component, pageProps }) {
  return(
    <>
    <nav className="flex justify-between bg-gray-900 text-white w-screen">
      <div className="px-5 xl:px-12 py-6 flex w-full items-center">
        <Link className="text-3xl font-bold font-heading" href="/">
          Rechtsrutsch DE
        </Link>

        <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          <li><Link className="hover:text-gray-200" href="/">Home</Link></li>
          <li><Link className="hover:text-gray-200" href="/armut-in-deutschland">Armut in DE</Link></li>
          <li><Link className="hover:text-gray-200" href="/">Die AfD</Link></li>
          <li><Link className="hover:text-gray-200" href="/ampel-koalition">Ampel-Koalition</Link></li>
        </ul>
        <a href="https://github.com/De27vin/PaW-Analyse-DE" target="_blank" className="mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
        <Image
        src="/github.svg"
        width={50}
        height={50}
        />
        </a>
      </div>
    </nav>
  <Component {...pageProps}/>;
  </>
  );
}
