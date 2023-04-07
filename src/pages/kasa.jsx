import Image from "next/legacy/image"
import imgKasa from "../../public/assets/projets/p11.png"

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
        </div>
      </div>
    )
}

export default Kasa