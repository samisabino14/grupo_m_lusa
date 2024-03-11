import Link from 'next/link';

import { FcCalendar } from 'react-icons/fc';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';

export const Header = () => {

    const [toggle, setToggle] = useState(false)

    return (

        <div className='fixed bg-white top-0 w-[100%] z-20 border-b-2 border-b-green-600'>
            <div className='container mx-auto flex justify-between items-center p-4'>
                <div className='flex gap-1 items-center text-green-600 font-bold text-xs md:text-xl'>
                    <Link href='/'>
                        <h2 className='hover:text-green-600'>Grupo M-Lusa</h2>
                    </Link>
                </div>

                <div className='hidden md:flex gap-10 text-gray-600'>
                    <Link href='/'>
                        <span className='hover:text-green-600'>Início</span>
                    </Link>
                    
                    <Link href='/servicos'>

                        <span className='hover:text-green-600'>Serviços</span>

                    </Link>

                    <Link href='/sobre'>

                        <span className='hover:text-green-600'>Sobre</span>

                    </Link>

                    <Link href='/contactos'>

                        <span className='hover:text-green-600'>Contactos</span>

                    </Link>

                </div>

                <div className='hidden md:block'>

                    <a href={`/contactos`} className='btn'>Contactar</a>

                </div>

                {
                    toggle ? (
                        <AiOutlineClose onClick={() => setToggle(!toggle)} size={24} className='md:hidden block' />

                    ) : (
                        <FiMenu onClick={() => setToggle(!toggle)} size={24} className='md:hidden block' />
                    )
                }

            </div>

            <div className={`duration-500 md:hidden text-xs flex flex-col w-[80%] rounded-lg h-screen fixed bg-green-600/80 gap-6 text-white top-[60px] ${toggle ? `left-[0]` : `left-[-100%]`}`}>
                <p></p>

                <Link href='/'>
                    <span className='hover:text-green-600 p-5'>Início</span>
                </Link>

                <Link href='/servicos'>

                    <span className='hover:text-green-600 p-5'>Serviços</span>

                </Link>

                <Link href='/sobre'>

                    <span className='hover:text-green-600 p-5'>Sobre</span>

                </Link>

                <Link href='/contactos'>

                    <span className='hover:text-green-600 p-5'>Contactos</span>

                </Link>
            </div>
        </div>
    )
}

