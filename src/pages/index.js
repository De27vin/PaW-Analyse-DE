import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="absolute inset-0">
      <Image
        src="/reichstag.png"
        alt="Reichstag"
        fill
        className="object-cover opacity-60"
        priority
      />
    </div>
    <div className="relative z-10 text-center">
  <h1 className="text-5xl font-bold mb-4">Rechtsrutsch-Analyse Deutschland</h1>
  <br/>
  <p className="text-xl">Fakten zur Regierung</p>
  <br/>
  <div className="grid grid-cols-3 gap-2 place-content-center">
  <div className="flex items-center gap-4">
  <Image src="/icons/government.svg" width={30} height={30}/>
  <p>+700 Bundesabgeordnete</p>
</div>
<div className="flex items-center gap-4">
  <Image src="/icons/law.svg" width={30} height={30}/>
  <p>1949 Gründung Bundesrepublik</p>
</div>
<div className="flex items-center gap-4">
  <Image src="/icons/weakness.svg" width={30} height={30}/>
  <p>1990 Wiedervereinigung und Berlin als Hauptstadt</p>
</div>
</div>
</div>
  </section>
  
  );
}
