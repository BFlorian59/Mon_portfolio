import React from 'react'
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link';
import Presantation from '../../public/assets/Presentation.jpeg'
import Image from 'next/image';
        
export default function Presentation() {
    return(
        <div id='presentation' className=' text-center flex flex-col'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 auto flex justify-center items-center'>
                <div>
                    <h1 className='py-4 text-gray-700 mt-20'>
                        Salut, je suis <span className='text-[#ff3131]'>Florian Broeks</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                        Un Développeur Web Front-End
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                       Je suis un développeur front-end spécialisé dans le JavaScript, React ou encore dans
                       dautre framework en JS. jai aussi dautre connaissance dans le back-end comme le PHP ou le SQL.
                    </p>
                    <div className='flex itmes-center justify-between max-w-[360px] m-auto py-4'>
                  
                       <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <Link href='https://www.linkedin.com/in/fbroeks/'>
                                <FaLinkedinIn/>
                            </Link>
                        </div>
                        <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <Link href='https://github.com/BFlorian59'>
                                <FaGithub/>
                            </Link>
                        </div>
                        <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <Link href='/#contact'>
                                <AiOutlineMail/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Image className=" m-auto hover:scale-105 ease-in duration-300 mt-20" src={Presantation} width="50%" height={450} alt='/'/>
            </div>
        </div>
    )
}


