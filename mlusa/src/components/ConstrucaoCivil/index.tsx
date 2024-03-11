import React from 'react'

function ConstrucaoCivil() {
    return (
        <div className='gap-10 lg:py-10'>

            <div className='md:shadow-md md:p-8 rounded-md'>
                <h1 className='md:text-xl text-sm font-bold'>Construção Civil</h1>

                <hr className='my-4' />

                <div className='md:p-8 p-4 md:text-sm text-xs'>

                    <div className='md:p-8 md:border rounded-md'>
                        <h2 className='font-bold'>Produção de:</h2>
                        <div className='grid md:gap-4 md:p-8 gap-2 p-4'>

                            <p>Blocos</p>
                            <p>Lancis</p>
                            <p>Latojas </p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConstrucaoCivil