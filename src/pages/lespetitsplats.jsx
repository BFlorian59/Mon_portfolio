import Image from "next/legacy/image"
import imglespetitsplats from "../../public/assets/projets/lespetitsplats.png"
import {RiRadioButtonFill} from "react-icons/ri"
import Link from "next/link"
/* eslint-disable react/no-unescaped-entities */

function lespetitsplats() {
    return(
      <div className='w-full'>
        <div className='h-[50vh] w-[100%] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'/>
            <Image
                className='absolute z-1'
                layout='fill'
                objectFit='cover'
                src={imglespetitsplats}
                alt='/'
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">Les petits plats</h2>
              <h3>JavaScript / CSS / HTML</h3>
            </div>
        </div>
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <h2 className="py-[2%]">Projet</h2>
            <h3 className="py-[2%]">Aperçu</h3>
            <p>
              Ceci est mon projet en JavaScript avec un algorithme de recherche. C'est un projet sur un site de recettes de cuisine nommée Les Petits Plats. 
              L'utilisateur peut naviguer sur plusieurs recettes et il peut voir les informations concernant 
              la recette par exemple, voir les ingrédients nécessaires pour faire la recette. Il contient aussi un système de recherche de tag par 
              ingrédients, ustensiles et appareils utilisé pour faire la recette.
            </p>
            <button></button>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologie utilisée</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Visual Studio</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />JavaScript</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />CSS</p>
                <p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1" />Github</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex align-middle justify-center m-auto mb-10">
          <Link className="mr-20" href='/#projects' >
            <button className='w-full p-4 text-gray-100 mr-10'>Back</button>
          </Link>
          <Link href='https://github.com/BFlorian59/Broeks_Florian-P7'>
            <button className='w-full p-4 text-gray-100'>Repot du projet</button>
          </Link>
        </div>
      </div>
    )
}

export default lespetitsplats