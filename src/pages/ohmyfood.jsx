import Image from "next/legacy/image"
import imgohmyfood from "../../public/assets/projets/ohmyfood.png"
import {RiRadioButtonFill} from "react-icons/ri"
import Link from "next/link"
/* eslint-disable react/no-unescaped-entities */

function Ohmyfood() {
    return(
      <div className='w-full'>
        <div className='w-[100%] h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1'
                layout='fill'
                objectFit='cover'
                src={imgohmyfood}
                alt='/'
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">Ohmyfood</h2>
              <h3>CSS / HTML</h3>
            </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <h2 className="py-[2%]">Projet</h2>
            <h3 className="py-[2%]">Aperçu</h3>
            <p>
              Ceci est projet d'intégration fait en html et par des animations en CSS. C'est un projet sur un site de restauration nommée Ohmyfood. 
              Le site permet d'afficher de la localisation des restaurants Une courte présentation de l'entreprise. 
              Une section contenant les 4 menus sous forme de cartes. Au clic sur la carte, l'utilisateur est redirigé vers la page du menu.
              Il y a 4 pages contenant chacune le menu d'un restaurant.
            </p>
            <button></button>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologie utilisée</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />HTML</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />CSS</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Animation en CSS</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Github</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex align-middle justify-center m-auto mb-10">
          <Link className="mr-20" href='/#projects' >
            <button className='w-full p-4 text-gray-100 mr-10'>Back</button>
          </Link>
          <Link className="mr-20" href='https://github.com/BFlorian59/P3_AnimationCSS_Broeks_Florian'>
            <button className='w-full p-4 text-gray-100'>Repot du projet</button>
          </Link>
          <Link href='https://ohmyfood-sage.vercel.app/'>
            <button className='w-full p-4 text-gray-100'>Lien du projet</button>
          </Link>
        </div>
      </div>
    )
}

export default Ohmyfood