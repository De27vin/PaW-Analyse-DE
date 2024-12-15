import "@/styles/globals.css";
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

export default function AmpelKoalitionPage(){
    return(
        <>
        <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="absolute inset-0">
                <Image
                    src="/images/ampelkoalition-symbolbild.jpg"
                    alt="Ampelkoalition"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            <div className="relative z-10 text-center">
            <a className="text-5xl font-bold">Die Ampelkoalition</a>
                <div className="grid grid-cols-3 mt-8">

                    <div>
                        <p className="text-2xl mr-10">Verantwortliche Parteien</p>
                    </div>

                    <div>
                        <p className="text-2xl">Gründe für den Fall</p>
                    </div>

                    <div>
                        <p className="text-2xl ml-10">Idee der Ampelkoalition</p>
                    </div>

                    {/* FIX: Beim klicken einer dieser drei Themen scrollt es auf der Seite entsprechend runter */}

                </div>
            </div>
        </section>

        <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="absolute inset-0">
                {/* Bild der Parteien */}
            </div>


            <div className="relative text-center">
                <a className="text-3xl">Die Parteien der Ampelkoalition</a>

            </div>
            
            <div className="grid grid-cols-3">
                <div className="flex items-center">
                    <a>SPD</a>
                </div>

                <div>
                    <a>FDP</a>
                </div>

                <div>
                    <a>Die Grünen</a>
                </div>
            </div>
        </section>


        </>
    )
}