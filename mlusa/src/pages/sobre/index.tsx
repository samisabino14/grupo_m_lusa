import { Header } from '@/components/Header'
import { ContentSobre } from '@/components/ContentSobre'
import Head from 'next/head'
import React from 'react'

function Sobre() {
    return (

        <>
            <Head>
                <title>Sobre</title>
            </Head>

            <Header />

            <div className='mt-24 min-h-[100vh]'>
                <ContentSobre />
            </div>

        </>
    )
}

export default Sobre