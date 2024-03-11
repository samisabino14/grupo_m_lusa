import React from 'react'
import Agropecuaria from '../Agropecuaria'
import ConstrucaoCivil from '../ConstrucaoCivil'
import Desporto from '../Desporto'
import Cultura from '../Cultura'
import Educacao from '../Educacao'
import Image from 'next/image'

function ContentServicos() {
    return (
        <div className='px-6 md:px-32 text-xs md:text-sm lg:text-base text-justify'>

            <h1 className='lg:text-3xl md:text-2xl text-sm font-semibold text-center'>Serviços</h1>

            <div className='grid md:grid-cols-3 gap-8 font-semibold md:my-20 my-8'>

                <div className='grid gap-2 items-center justify-center'>
                    <Image className='rounded-lg' src="/1.jpg" width={320} height={280} alt="" />
                    <p className='text-center'>Agropecuária</p>
                </div>

                <div className='grid gap-2 items-center justify-center'>
                    <Image className='rounded-lg' src="/ml2.jpg" width={320} height={280} alt="" />
                    <p className='text-center'>Construção Civil</p>
                </div>

                <div className='grid gap-2 items-center justify-center'>
                    <Image className='rounded-lg' src="/ml3.jpg" width={340} height={190} alt="" />
                    <p className='text-center'>Cultura</p>
                </div>

                <div className='grid gap-2 items-center justify-center'>
                    <Image className='rounded-lg' src="/ml4.jpg" width={320} height={280} alt="" />
                    <p className='text-center'>Desporto</p>
                </div>

                <div className='grid gap-2 items-center justify-center'>
                    <Image className='rounded-lg' src="/ml5.jpg" width={320} height={280} alt="" />
                    <p className='text-center'>Educação</p>
                </div>

            </div>

            <div className='grid md:gap-4 gap-2'>

                <Agropecuaria />

                <div className='grid lg:grid-cols-2 md:gap-8 gap-4'>
                    <ConstrucaoCivil />

                    <Cultura />
                </div>
                
                <div className='grid lg:grid-cols-2 md:gap-8 gap-4'>
                    <Desporto />

                    <Educacao />
                </div>
            </div>

        </div>
    )
}

export default ContentServicos