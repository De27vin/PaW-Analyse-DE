import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function dieAfD() {
    return (
        <>
        <section className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="absolute inset-0">
              <Image
                  src="/images/afd-symbolbild.jpg"
                  alt="Ampelkoalition"
                  fill
                  className="object-cover opacity-100"
                  priority
              />
            </div>

          <div className="gap-10 h-20 m-10 h-auto p-10 relative">
              <p className="text-5xl font-bold text-center drop-shadow-[0_8px_20px_rgba(0,0,0,1)]">Meinung der AfD, warum die Ampelkoalition fiel</p>
          
            <div className="grid grid-cols-3 gap-10 m-10 p-10 relative">
              {/* First column */}
              <div className="mr-5 bg-white bg-opacity-90 p-7 text-black rounded-xl">
                <div className="text-justify">
                Die AfD sieht in der linken <a className="font-semibold underline decoration-red-500">Migrationspolitik</a> der Ampelkoalition
                ein Sicherheitsrisiko, sie fordert eine sofortige Grenzschliessung 
                aller Zuwanderung. Deutschland sorge dafür, dass der Strom nicht versiegen wird. 
                {/* Quelle */}
                <a className="font-semibold italic text-orange-400" 
                href="https://www.bundestag.de/dokumente/textarchiv/2023/kw38-de-aktuelle-stunde-massenmigration-966502" 
                target="_blank" rel="noopener noreferrer"> Quelle</a>
                </div>
              </div>

              {/* Second column */}
              <div className="mx-5 bg-white bg-opacity-90 p-7 text-black rounded-xl">
                <div className="text-justify">
                  Die AfD spricht sich aus für deutliche <a className="font-semibold underline decoration-red-500">Steuersenkungen</a> mit maximal 25%
                  Steuern. Sie fordern die Abschaffung von Erbschaftssteuern sowie Grundsteuern
                  und Grunderwerbssteuern für selbstgenutztes Wohneigentum.
                  {/* Quelle */}
                  <a className="font-semibold italic text-orange-400" 
                  href="https://www.tichyseinblick.de/wirtschaft/ampel-aus-wirtschaftliche-ansaetze-cdu-afd" 
                  target="_blank" rel="noopener noreferrer"> Quelle</a>
                </div>
              </div>

              {/* Third column */}
              <div className="ml-5 bg-white bg-opacity-90 p-7 text-black rounded-xl">
                  <div className="text-justify">
                  Die AfD sieht die undurchdachte Energiewende als gescheitert, sie 
                  fordern den Abbau der rechtlichen Hürden um den Betrieb von <a className="font-semibold underline decoration-red-500">Atomkraftwerken</a> wieder 
                  zu ermöglichen. Sie sehen die CO2-neutrale
                  Energieversorgung in Deutschland als gescheitert.
                  {/* Quelle */}
                  <a className="font-semibold italic text-orange-400" 
                  href="https://www.tichyseinblick.de/wirtschaft/ampel-aus-wirtschaftliche-ansaetze-cdu-afd" 
                  target="_blank" rel="noopener noreferrer"> Quelle</a>
                  </div>
              </div>

            </div>
          </div>
        </section>
      </>
    )
}