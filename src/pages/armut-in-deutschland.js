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
        <p className='text-2xl font-bold'>Lorem Ipsum</p> 
        <p>Lorem Ipsum</p>
    </div>
    </div>
    </>
 );
} 