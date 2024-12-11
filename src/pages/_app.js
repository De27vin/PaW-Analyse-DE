import "@/styles/globals.css";
import Link from 'next/link';

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
        </ul>
        <div className="mx-auto">Github</div>
      </div>
    </nav>
  <Component {...pageProps} />;
  </>
  )
}
