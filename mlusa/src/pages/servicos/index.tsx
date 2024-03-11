import ContentServicos from '@/components/ContentServicos'
import { Header } from '@/components/Header'
import Head from 'next/head'
import React from 'react'

function Servicos() {
    return (

        <>
            <Head>
                <title>Serviços</title>
            </Head>

            <Header />

            <div className='md:mt-32 mt-24 min-h-[100vh]'>

                <ContentServicos />
            </div>


        </>
    )
}

export default Servicos