import React from 'react'
import { Button } from '../Button'

export const Hero = () => {

    return (
        
        <div className='bg-[url("/agriculrura2.jpg")] bg-[60%] h-screen bg-cover bg-no-repeat bg-fixed flex items-center justify-center relative'>
            <div className='absolute inset-0 bg-black/50'></div>
            
            <div className='container lg:mt-20 mx-auto px-4 z-10'>
                
                <div className='text-center text-white flex flex-col gap-[20px] md:gap-[40px]'>

                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'>Cultivamos o seu futuro!</h1>
                    </div>
                    
                    <div>
                        <h1 className='text-2xl lg:text-4xl font-semibold tracking-wider text-gray-200'><span className=''>Cresçamos</span> Juntos.</h1>
                    </div>

                    <div className='mx-auto bg-green-600 h-[2px] w-[150px]'></div>

                    <div>
                        <p className='text-sm md:text-xl text-gray-100 tracking-wider'>O nosso crescimento é seu.</p>
                    </div>
                    
                    <div>
                        <Button link='/sobre' text='Saiba mais' />
                    </div>

                </div>

            </div>
        </div>
    )
}
