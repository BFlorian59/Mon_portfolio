import Image from 'next/image'
import imgcontact from '../../public/assets/contact.png'
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

function Contact() {
    return(
        <div className="w-full lg:h-screen ">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                <h2 className="py-4">Get in touch</h2>
                <div className=" grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadox-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full rounded-xl">
                            <div>
                                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={imgcontact} alt="/" />
                            </div>
                            <div>
                                <h2 className='py-2'>Name here</h2>
                                <p>Front-End Developper</p>
                                <p className='py-4'>I am available for work</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect with me</p>
                                <div className='flex itmes-center justify-between py-4'>
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

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 '>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Nom</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Numéro de télephone</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Sujet</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10'></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact