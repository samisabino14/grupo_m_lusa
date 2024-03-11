import React from 'react'

function Footer() {

    const year = new Date();

    return (

        <div className='min-h-[4rem] grid bg-gray-200 justify-center items-center text-gray-600 md:text-sm text-xs'>
            <p>&copy; {year.getFullYear()} Grupo M-Lusa. Todos os direitos reservados.</p>
        </div>

    )
}

export default Footer