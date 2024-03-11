import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaWhatsapp, FaPhone } from 'react-icons/fa';

function ContentContactos() {
    return (
        <div className='md:px-32 md:my-8 mt-8 text-sm md:text-base text-justify'>

            <h1 className='lg:text-3xl md:text-2xl font-semibold text-center'>Contactos</h1>

            <div className='grid lg:grid-cols-3 items-center justify-center md:gap-10 md:py-20'>

                <div className='grid gap-4 md:gap-10 lg:shadow-md md:p-8 p-4 rounded-md text-center'>
                    <div className='grid gap-6'>
                        <h1 className='font-semibold'>Telemóvel</h1>
                        <hr />
                    </div>

                    <div className='flex items-center justify-center gap-8'>

                        <h1><FaPhone size={20} color='' /></h1>
                        <h1><FaWhatsapp size={24} color='green' /></h1>

                    </div>

                    <p className='font-semibold text-gray-500'>+244 923 478 000</p>

                </div>

                <div className='grid gap-4 lg:shadow-md md:p-8 p-4 rounded-md md:min-h-[15rem]'>
                    <div className='grid gap-6'>
                        <h1 className='text-center font-semibold'>Emails</h1>
                        <hr />
                    </div>

                    <p><span className='font-semibold'>Geral:</span> <a className='text-gray-500' href="mailto:geral@grupomlusa.ao">geral@grupomlusa.ao</a></p>
                    <p><span className='font-semibold'>CEO:</span> <a className='text-gray-500' href="mailto:luis.muongueno@grupomlusa.ao">luis.muongueno@grupomlusa.ao</a></p>
                </div>

                <div className='grid md:gap-10 gap-4 lg:shadow-md md:p-8 p-4 rounded-md text-center md:min-h-[14rem]'>
                    <div className='grid gap-6'>
                        <h1 className='font-semibold'>Redes Sociais</h1>
                        <hr />
                    </div>

                    <div className='flex items-center justify-center gap-8'>

                        <a href='https://facebook.com/grupo_mlusa'><FaFacebook size={20} color='' /></a>
                        <a href='https://instagram.com/grupo_mlusa'><FaInstagram size={20} color='' /></a>
                        <a href='https://www.tiktok.com/@grupo_mlusa'><FaTiktok size={20} color='' /></a>
                        <a href='https://twitter.com/grupo_mlusa'><FaTwitter size={20} color='' /></a>

                    </div>

                    <p className='font-semibold text-gray-500'>grupo_mlusa</p>
                </div>


            </div>
        </div>)
}

export default ContentContactos