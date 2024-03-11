"use client"

import ContentContactos from '@/components/ContentContactos';
import ContentServicos from '@/components/ContentServicos';
import { ContentSobre } from '@/components/ContentSobre';
import { Hero } from '@/components/Hero';
import Head from 'next/head';


export default function Home() {

    return (

        <>
            <Head>
                <title>Grupo M-Lusa</title>
            </Head>

            <Hero />

            <p className='p-10 md:mt-10 md:px-32 text-xs md:text-sm lg:text-base text-justify'>
                Bem-vindo ao Grupo M-Lusa, uma empresa multifacetada com sede no Dundo, Lunda Norte,
                dedicada a impulsionar o desenvolvimento e a excelência em diversos setores-chave.
                Com uma presença abrangente nos ramos de Agropecuária, Construção Civil, Desporto,
                Cultura e Educação, nosso grupo está comprometido em oferecer soluções inovadoras e
                sustentáveis que atendam às necessidades variadas de nossos clientes e comunidades
                locais.
            </p>

            <ContentServicos />

            <ContentSobre />

            <ContentContactos />

        </>
    )
}

