import Image from "next/legacy/image"
import imgKasa from "../../public/assets/projets/p11.png"
import {RiRadioButtonFill} from "react-icons/ri"
import Link from "next/link"
/* eslint-disable react/no-unescaped-entities */

function Kasa() {
    return(
      <div className='w-full'>
        <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1'
                layout='fill'
                objectFit='cover'
                src={imgKasa}
                alt='/'
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">Kasa</h2>
              <h3>React JS / CSS / HTML</h3>
            </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <h2 className="py-[2%]">Projet</h2>
            <h3 className="py-[2%]">Aperçu</h3>
            <p>
              Ceci est mon premier projet en ReactJs. C'est un projet sur une agence immobilière nommée Kasa. 
              L'utilisateur peut naviguer sur plusieurs annonces et il peut voir les informations la concernant 
              comme la ville du lieu, des photos et des informations complémentaires.
            </p>
            <button></button>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologie utilisée</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Visual Studio</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />ReactJS</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />CSS</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Github</p>
              </div>
            </div>
          </div>
          <Link href='/#projects' >
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    )
}

export default Kasa