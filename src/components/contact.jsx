import Image from 'next/image'
import imgcontact from '../../public/assets/contact.png'
import {FaGithub, FaLinkedinIn} from "react-icons/fa"
import {AiOutlineMail} from 'react-icons/ai'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { useRef, useState } from 'react'
import HCaptcha from '@hcaptcha/react-hcaptcha';

function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sujet, setSujet] = useState('')
    const [num, setNum] = useState('')
    const [submitted, setSubmitted] = useState(true)
    const [token, setToken] = useState("")
    const [error, setError] = useState("")
    const captcha = useRef()

    const handleSubmit = (e) => { 
        e.preventDefault()
        if(!token){
            setSubmitted(false)
            setError("You must verify the captcha")
        }
        if(submitted){
        console.log('Sending')
        let data = {
          name,
          num,
          email,
          sujet,
          message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            token,
            body: JSON.stringify(data)
          }).then((res) => {
            if (token) {
                if (res.status === 200 && name && num && email && message && sujet) {
                    console.log('Response succeeded!')
                    alert('Message envoyé')
                    setName('')
                    setNum('')
                    setEmail('')
                    setSujet('')
                  }else{
                      alert('Veuillez remplir tous les champs')
                }
            }
        }).finally(()=>{
            captcha.current.resetCaptcha();
            setToken("");
            setSubmitted(false)
        })  
        }        
    }

    return(
        <div id='contact' className="w-full lg:h-screen ">
            <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                <h2 className="py-4">Me contacter</h2>
                <div className=" grid lg:grid-cols-5 gap-8">
                    <div className="col-span-3 lg:col-span-2 w-full shadow-xl shadox-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full rounded-xl">
                            <div>
                                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={imgcontact} width={500} alt="/" />
                            </div>
                            <div>
                                <h2 className='py-2'>Florian Broeks</h2>
                                <p>Developpeur Front-End</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect with me</p>
                                <div className='flex itmes-center justify-between py-4'>
                                    <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <Link href='https://www.linkedin.com/in/florian-broeks-0b5540210/'>
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
                    </div>

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 '>
                        <div className='p-4'>
                            <form method='POST' encType='multipart/form-data'>
                                <div className='grid md:cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Nom</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={(e)=>{setName(e.target.value)}}  type="text" required />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Numéro de télephone</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={(e)=>{setNum(e.target.value)}} type="text" required />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={(e)=>{setEmail(e.target.value)}} type="email" required/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Sujet</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' onChange={(e)=>{setSujet(e.target.value)}} type="text" required/>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300' onChange={(e)=>{setMessage(e.target.value)}} rows='10'></textarea>
                                </div>
                                <div className='flex flex-col py-2'>
                                <HCaptcha
                                    ref={captcha}
                                    sitekey="a7c48552-a7dd-472e-be71-e087d28ab5cd"
                                    onVerify={token => setToken(token)}
                                    onExpire={e => setToken("")}
                                />
                                {error && <p>{error}</p>}
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4' onClick={(e)=>{handleSubmit(e)}}>Envoyer</button>
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