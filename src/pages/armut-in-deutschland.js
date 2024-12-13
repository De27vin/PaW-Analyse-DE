import Image from 'next/image'

export default function ArmutInDeutschlandPage() {
return (
    <>
    <div className="grid grid-cols-2 gap-10 h-20 bg-gray-500 m-10 h-auto p-10">
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
        <p className='text-xl'>Die Armut zeigt sich in Deutschland bis heute noch und das obwohl es eines der wohlhabendsten Länder der Welt ist. Die Gruft zwischen Arm und Reich zeigt sich hier aber eher relativ. Menschen können sich kulturell nicht mehr aktiv beteiligen und müssen sich um ihre finanzielle Zukunft sorgen. Dabei ist auch vor allem Ost-DE betroffen, welches immer noch von den Folgen der Auflösung der DDR betroffen ist. </p>
    </div>
    </div>
    </>
 );
} 