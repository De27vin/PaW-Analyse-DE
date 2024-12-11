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
      <h1 className="text-5xl font-bold mb-4">Willkommen!</h1>
      <p className="text-xl">Hier ist deine Hero Section</p>
    </div>
  </section>
  
  );
}
