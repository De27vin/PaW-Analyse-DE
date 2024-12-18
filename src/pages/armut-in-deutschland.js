import Image from 'next/image'

export default function ArmutInDeutschlandPage() {
return (
    <>
    <div className="grid grid-cols-2 gap-10 h-20 bg-gray-600 m-10 h-auto p-10">
    <div className='relative'>
        <br/>
        <section className='bg-gray-900'>
        <Image
        src="/images/poverty.png"
        width={1000}
        height={1000}
        className='object-cover opacity-60'
        />  
        </section>
    </div>
    <div className='w-3/4'>
        <p className='text-2xl font-bold'>Die Armut in Deutschland</p> 
        <p className='text-xl'>Die Armut zeigt sich in Deutschland bis heute noch und das obwohl es eines der wohlhabendsten Länder der Welt ist. Die Gruft zwischen Arm und Reich zeigt sich hier aber eher relativ. Menschen können sich kulturell nicht mehr aktiv beteiligen und müssen sich um ihre finanzielle Zukunft sorgen. Dabei ist auch vor allem Ost-DE betroffen, welches immer noch von den Folgen der Auflösung der DDR betroffen ist. Zum Teil liegt es auch an der Arbeitskultur in den jeweiligen Bundesländern. Während Bayern mit seinem BiP alleine schon fast mit der Schweiz mithalten kann, hat z.B. Mecklenburg-Vorpommern eines der tiefsten BiP's und das trotz Anbindung an wichtige Handelsrouten. </p>
    </div>
    </div>

    <div className="grid grid-cols-2 gap-10 h-20 bg-gray-700 m-10 h-auto p-10">
    <div className='w-3/4'>
        <p className='text-2xl font-bold'>Das BiP</p> 
        <p className='text-xl'>Auf dieser Grafik sieht man das BiP und das BiP pro Kopf für jedes Bundesland. Wohlhabende Wirtschaftszentren wie Nordrhein-Westfalen oder Bayern haben eher ein stablies BiP. Ostdeutsche Bundesländer haben eher ein tieferes BiP und das zeigt sich in den jeweiligen Bundesländern auch. Armut und Entfremdung gegenüber dem Staat sind für einige Menschen in diesen Bundesländern schon Realität. Solche Menschen sind meist auch empfänglicher für extreme Denkweisen und eine rechte politische Ausrichtung. Auch Strukturdefizite und fehlgeschlagene Pläne für die Förderung mit finanziellen Hilfspaketen sind ein Grund warum viele Menschen nicht der Armut entkommen und es zum Teil über Generationen übertragen wird.
</p>
    </div>
    <div className='relative'>
        <br/>
        <Image
        src="/plots/bip.png"
        width={1000}
        height={1000}
        />  
    </div>
    </div>

    <div className="grid grid-cols-2 gap-10 h-20 bg-gray-800 m-10 h-auto p-10">
    <div className='relative'>
        <br/>
        <section className='bg-gray-900'>
        <Image
        src="/images/poverty.png"
        width={1000}
        height={1000}
        className='object-cover opacity-60'
        />  
        </section>
    </div>
    <div className='w-3/4'>
        <p className='text-2xl font-bold'>Die fehlgeschlagenen Reformen der Ampel</p> 
        <p className='text-xl'>Die Ampel-Koalition hat in Ihrer Zeit einige soziale und systematische Reformen angestrebt darunter die Erhöhung des Mindestlohns und des Bürgergeldes, welches sein Name auch durch die Reformen erhielt. Sie sollen eine Sicherung des Existenzminimum bewirken Manche dieser Reformen konnten möglicherweise Positives bewirken, jedoch zeigt das BiP, dass die Armut noch besteht. Die anhaltende Armut sorgt bei vielen Bürgern für eine Vertrauensverlust in solche Bemühungen und extremere politische Ansichten. Viele Menschen denken, dass zunehmend Menschen, die in Deutschland in Asyl leben das Geld, das ihnen zusteht, auffressen und sie nichts wirklich davon haben. </p>
    </div>
    </div>
    </>
 );
} 