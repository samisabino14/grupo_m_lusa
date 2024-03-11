import React from 'react'

function Desporto() {
    return (
        <div className='gap-10'>

            <div className='md:shadow-md md:p-8 rounded-md'>
                <h1 className='md:text-xl text-sm font-bold'>Desporto</h1>

                <hr className='my-4' />

                <div className='md:p-8 p-4 md:text-sm text-xs'>

                    <div className='md:p-8 md:border rounded-md'>
                        <h2 className='font-bold'>Academia de:</h2>
                        <div className='grid md:gap-4 md:p-8 gap-2 p-4'>
                            <p>Futebol</p>
                            <p>Basquetebol</p>
                            <p>Andebol</p>
                            <p>Futsal</p>
                            <p>Natação</p>
                            <p>Ténis de Campo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Desporto