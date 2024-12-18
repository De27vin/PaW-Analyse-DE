import { Geist, Geist_Mono } from "next/font/google";

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
        <div className="gap-10 h-20 bg-gray-500 m-10 h-auto p-10">
            <p className="text-3xl font-bold text-center">Meinung der AfD, warum die Ampelkoalition fiel</p>
        </div>
        <div className="grid grid-cols-3 gap-10 bg-gray-500 m-10 p-10">
            {/* First column */}
            <div className="mr-5">
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
            <div className="mx-5">
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
            <div className="ml-5">
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

        </>
    )
}