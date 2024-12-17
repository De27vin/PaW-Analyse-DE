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

        <section className="relative w-full h-screen flex grid grid-rows-3">
            {/* SPD */}
            <div 
                className="css-spd-hintergrund flex flex-col justify-between items-center text-center flex-1 h-full bg-cover bg-center">
                <div className="mt-8 text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2">
                    SPD
                </div>
                <div className="mx-12 mb-8 text-lg text-white bg-black bg-opacity-50 px-4 py-2">
                Die SPD, von der auch Bundeskanzler Olaf Scholz kommt, 
                steht für soziale Gerechtigkeit und staatliche Investitionen. 
                In der Ampelkoalition hat die SPD versucht, eine Balance zwischen 
                sozialem Ausgleich und wirtschaftlicher Stabilität zu finden. 
                Sie stehen für Sozialpolitik, die Unterstützung von Arbeitnehmern 
                und gezielten Investitionen in die Infrastruktur. <a className="font-semibold underline decoration-blue-700">
                
                Konfliktpunkt mit den anderen Parteien</a>: Die SPD wollte höhere staatliche Ausgaben 
                für soziale Projekte und Investitionen in die Zukunft, was im Widerspruch zur 
                FDP-Position der Haushaltsdisziplin stand.
                </div>
            </div>

            {/* FDP */}
            <div 
                className="css-fdp-hintergrund flex flex-col justify-between items-center text-center flex-1 h-full bg-cover bg-center">
                <div className="mt-8 text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2">
                    FDP
                </div>
                <div className="mx-12 mb-8 text-lg text-white bg-black bg-opacity-50 px-4 py-2">
                Die FDP vertritt eine wirtschaftsliberale Politik. Christian Lindner, 
                der ehemalige Bundesfinanzminister, welcher aber von Olaf Scholz entlassen 
                wurde, bestand auf Sparsamkeit und die Reduktion staatlicher Eingriffe 
                in die Wirtschaft. Für die FDP war der Haushalt ein entscheidender Punkt, 
                um die finanzielle Stabilität von Deutschland nicht zu gefährden. <a className="font-semibold underline decoration-blue-700">

                Konfliktpunkt mit den anderen Parteien</a>: Die FDP widersetzte sich 
                höheren Ausgaben und neuen Schulden, die durch die SPD und die Grünen 
                für soziale- und Klima-Projekte entstanden wären. 
                </div>
            </div>

            {/* Die Grünen */}
            <div 
                className="css-die-gruenen-hintergrund flex flex-col justify-between items-center text-center flex-1 h-full bg-cover bg-center">
                <div className="mt-8 text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2">
                    Die Grünen
                </div>
                <div className="mx-12 mb-8 text-lg text-white bg-black bg-opacity-50 px-4 py-2">
                Die Grünen setzen sich vor allem für die Klimapolitik ein. 
                Ihr Ziel war es, die deutsche Wirtschaft durch nachhaltige 
                Energiequellen zu modernisieren und langfristig klimaneutral 
                zu gestalten. Sie setzten auf Förderprogramme für erneuerbare Energien. <a className="font-semibold underline decoration-blue-700">

                Konfliktpunkt mit den anderen Parteien</a>: Diese Massnahmen 
                erforderten hohe Investitionen. Ausserdem kam es zu 
                Unzufriedenheit über den angeblichen Vorrang der grünen 
                Klimaziele vor der wirtschaftlicher Stabilität.
                </div>
            </div>
        </section>

        </>
    )
}