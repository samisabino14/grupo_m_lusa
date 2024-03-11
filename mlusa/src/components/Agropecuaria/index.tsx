import React from 'react'

function Agropecuaria() {
    return (
        <div className='gap-10'>
            
            <div className='md:shadow-md md:p-8 rounded-md'>
                <h1 className='md:text-xl text-sm font-bold'>Agropecuária</h1>

                <hr className='my-4' />

                <div className='grid lg:grid-cols-3 md:gap-10 gap-4 md:p-8 p-4 md:text-sm text-xs'>

                    <div className='md:p-8 md:border rounded-md'>
                        <h2 className='font-bold'>Produção Agrícola</h2>
                        <div className='grid md:gap-4 md:p-8 gap-2 p-4'>

                            <p>Cereais</p>
                            <p>Frutas</p>
                            <p>Legumes</p>

                        </div>
                    </div>

                    <div className='md:p-8 md:border rounded-md'>
                        <h2 className='font-bold'>Produção Animal</h2>

                        <div className='grid md:gap-4 md:p-8 gap-2 p-4'>
                            <p>Gado Bovino</p>
                            <p>Suíno</p>
                            <p>Caprino e aves</p>
                        </div>
                    </div>

                    <div className='md:p-8 md:border rounded-md'>
                        <h2 className='font-bold'>Aquacultura</h2>

                        <div className='grid md:gap-4 md:p-8 gap-2 p-4'>
                            <p>Criação de peixes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agropecuaria