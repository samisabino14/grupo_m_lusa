import Link from "next/link";
import { useRouter } from "next/router";


const Error = () => {

    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center h-[100vh] 
            bg-white-600 text-center text-green-600"
        >
            <div>
                <h1 className="md:text-9xl text-2xl font-bold">404</h1>
                <h1 className="md:text-1xl text-sm p-2">Página não encontrada</h1>
                <Link href='/'>
                    <div className="md:text-white my-4 md:bg-green-600 p-2 rounded-md md:px-24 transition duration-500
                 font-bold hover:scale-105 text-sm shadow-sm shadow-gray-200 hover:shadow-lg cursor-pointer">
                        Início
                    </div>
                </Link>
                <h1 className="md:text-lg text-xs font-bold mt-6">M LUSA</h1>

            </div>
        </div>
    )
}

export default Error;
