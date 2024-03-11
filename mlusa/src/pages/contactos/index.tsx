import ContentContactos from '@/components/ContentContactos'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import Head from 'next/head'
import React from 'react'

function Servicos() {
    return (

        <>
            <Head>
                <title>Contactos</title>
            </Head>

            <Header />

            <div className='mt-32 min-h-[100vh]'>
                <ContentContactos />
            </div>


        </>
    )
}

export default Servicos