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
                        <button onClick={() => {
                            document
                            .getElementById("parteien-sektion")
                            .scrollIntoView({ behavior: "smooth" })
                        }}>
                            <p className="text-2xl mr-10">Verantwortliche Parteien</p>
                        </button>
                    </div>

                    <div>
                        <button onClick={() => {
                            document
                            .getElementById("gruende-fall-sektion")
                            .scrollIntoView({ behavior: "smooth" })
                        }}>
                            <p className="text-2xl">Gründe für den Fall</p>
                        </button>
                    </div>

                    <div>
                        <button onClick={() => {
                            document
                            .getElementById("parteien-sektion")
                            .scrollIntoView({ behavior: "smooth" })
                        }}>
                            <p className="text-2xl ml-10">Idee der Ampelkoalition</p>
                        </button>
                    </div>

                    {/* FIX: Beim klicken einer dieser drei Themen scrollt es auf der Seite entsprechend runter */}

                </div>
            </div>
        </section>

        <section id="parteien-sektion" className="relative w-full h-screen flex grid grid-rows-3">

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
                {/* Quelle */}
                <a className="font-semibold italic text-orange-400" 
                href="https://www.dw.com/de/deutschland-regierung-ampelkoalition-olaf-scholz-christian-lindner-fdp-spd-gr%C3%BCne/a-70717075" 
                target="_blank" rel="noopener noreferrer"> Quelle</a>
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
                {/* Quelle */}
                <a className="font-semibold italic text-orange-400" 
                href="https://www.zdf.de/nachrichten/politik/deutschland/ampel-aus-scholz-lindner-haushalt-100.html" 
                target="_blank" rel="noopener noreferrer"> Quelle</a>
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
                {/* Quelle */}
                <a className="font-semibold italic text-orange-400" 
                href="https://www.zdf.de/nachrichten/politik/deutschland/ampel-aus-scholz-lindner-haushalt-100.html" 
                target="_blank" rel="noopener noreferrer"> Quelle</a>
                </div>
            </div>
        </section>

        <section className="relative w-full min-h-screen bg-gray-900 text-white flex flex-col justify-start">
            {/* Hintergrundbild */}
            <div className="absolute inset-0">
                <Image
                    src="/images/ampel-koalition-fall-symbolbild.jpg"
                    alt="Ampelkoalition"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
            </div>

            {/* Titel über den Elementen */}
            <div id="gruende-fall-sektion" className="relative z-10 text-center mt-12 mb-8 px-4">
                <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide bg-black bg-opacity-50 inline-block px-6 py-3 rounded-lg shadow-lg">
                    Gründe für den Fall der Ampelkoalition
                </h2>
            </div>

            {/* Gründe-Container äusserer */}
            <div className="relative w-full grid grid-cols-2">

                {/* Gründe-Container innerer */}
                <div className="relative z-10 w-full px-4 md:px-12 grid gap-8">
                    {/* Grund 1 */}
                    <div className="bg-white bg-opacity-90 text-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-red-500">
                        <h3 className="text-2xl font-semibold text-red-600 mb-2">1. Streit um Wirtschaftliche Massnahmen</h3>
                        <p className="leading-relaxed">
                            Ein zentraler Streitpunkt innerhalb der Koalition war der Umgang mit der schlechter 
                            werdenden wirtschaftlichen Lage Deutschlands. Während die FDP für eine liberale 
                            Wirtschaftspolitik war, verfolgten die SPD und die Grünen andere Prioritäten:
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>SPD:</strong> Fokus auf soziale Gerechtigkeit und staatliche Investitionen.</li>
                            <li><strong>Grüne:</strong> Vorrang für den Klimaschutz mit kostspieligen Maßnahmen.</li>
                        </ul>
                    </div>

                    {/* Grund 2 */}
                    <div className="bg-white bg-opacity-90 text-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-yellow-500">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-2">2. Scheitern des Haushaltsentwurfs 2025</h3>
                        <p className="leading-relaxed">
                            Das Scheitern eines gemeinsamen Haushaltsentwurf für 2025 zu erstellen
                            brachte der Koalition weitere Konflikte. Die FDP bestand darauf, die Schuldenbremse 
                            einzuhalten, doch die SPD und die Grünen wollten weiter investieren.
                        </p>
                        <ul className="list-disc list-inside mt-2">
                            <li><strong>Einnahmen:</strong> Steuern und Abgaben.</li>
                            <li><strong>Ausgaben:</strong> Bildung, Soziales, Verteidigung und Infrastruktur.</li>
                        </ul>
                    </div>

                    {/* Grund 3 */}
                    <div className="bg-white bg-opacity-90 text-gray-800 rounded-lg p-6 shadow-lg border-l-4 border-green-500">
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">3. Verlust von Vertrauen</h3>
                        <p className="leading-relaxed">
                            Die ständigen Konflikte führten zu Vertrauensverlust der Bevölkerung gegenüber dem Zusammenhalt der Koalition. 
                            Ohne gemeinsame Ziele und eine gemeinsame Strategie war eine es für sie nicht mehr möglich, die Koalition fortzusetzen.
                        </p>
                    </div>
                </div>

                {/* Bundeshaushaltsgrafik-Container */}
                <div className="relative z-10 w-full px-4 md:px-12 grid gap-8">
                    <div className="relative">
                        <Image className="border-solid rounded-lg shadow-lg"
                            src="/plots/Bundeshaushalt-python-grafik.png"
                            alt="Bundeshaushalt Grafik"
                            width={1000}
                            height={1000}
                        />
                    </div>

                    <div className="relative bg-white bg-opacity-90 text-gray-800 rounded-lg p-6 shadow-lg">
                        {/* Farbübergang für die Border */}
                        <div className="absolute inset-0 left-0 w-1 bg-gradient-to-b from-red-700 to-black rounded-l-lg"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-semibold text-black mb-2">Jährliche Verluste</h3>
                            <p className="leading-relaxed">
                                Die roten Balken stehen für die Ausgaben des jeweiligen Jahres, die grünen für die Einnahmen.
                                Man kann in der Grafik sehen, wie jährlich die geplanten Einnahmen nicht erfüllt werden können.
                                Es werden jedes Jahr verluste gemacht, was die finanziell schwierige Situation der Ampelkoalition erklärt.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}