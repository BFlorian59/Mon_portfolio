import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)

    const [shadow, setShadow] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() =>{
        const handleShadow = () =>{
            if(window.scrollY >= 90){
                setShadow(true)
            } else{
                setShadow(false)
            }
        }
        
        window.addEventListener('scroll', handleShadow)
    },[])

    return(
        <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image src="" alt="/" width={50} height={20}/>
                <div>
                    <ul className="hidden md:flex">
                        <Link href='/'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href='/#skills'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href='/#projects'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href='/#contact'>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact me</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden">
                        <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] p-10 ease-in duration-500'}>
                <div>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image src="" alt="/" width='87' height='35' />
                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Florian Broeks</p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col" >
                        <ul className="uppercase">
                            <Link href='/'>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href='/#projects'>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href='/#contact'>
                                <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact me</li>
                            </Link>
                        </ul>
                        <div className=" pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5]">Lets connect</p>
                            <div className="flex items-center justify-between my-4 w-full sm:-[80%]">
                                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn/>
                                </div>
                                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub/>
                                </div>
                                <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar