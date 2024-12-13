import "@/styles/globals.css";
import Image from "next/image";

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
        <div className="grid grid-cols-3">

        </div>
        </section>

        </>
    )
}