import React from 'react'

function Educacao() {
    return (
        <div className='gap-10'>

            <div className='md:shadow-md md:p-8 rounded-md'>
                <h1 className='md:text-xl text-sm font-bold'>Educação</h1>

                <hr className='my-4' />

                <div className='md:p-8 p-4 md:text-sm text-xs'>

                    <div className='md:p-8 md:border rounded-md'>
                        <h2 className='font-bold'>Ensinos:</h2>
                        <div className='grid md:gap-4 md:p-8 gap-2 p-4'>
                            <p>Pré-escolar</p>
                            <p>Primário</p>
                            <p>Secundário</p>
                            <p>Médio</p>
                            <p>Superior </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Educacao