import Image from "next/image"
import html from "../../public/assets/skills/html.png"

function Skills() {
    
    return(
        <div id="skills" className="w-full md:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <h2 className="mb-[3%]">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src={html}
                                width={70}
                                height={70}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/css.png'
                                width={50}
                                height={50}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/js1.png'
                                width={65}
                                height={65}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>JS</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/jest1.png'
                                width={65}
                                height={65}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Jest</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/react1.png'
                                width={100}
                                height={100}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/wordpress1.png'
                                width={100}
                                height={100}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>WordPress</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/php1.png'
                                width={100}
                                height={100}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>PHP</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/sql5.png'
                                width={65}
                                height={65}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>SQL</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/tailwindcss.png'
                                width={65}
                                height={65}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Tailwindcss</h3>
                        </div>
                    </div>
                </div>
                <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                    <div className="grid grid-col-2 gap-4 justify-center items-center">
                        <div className="m-auto">
                            <Image
                                src='/../public/assets/skills/nextjs.png'
                                width={65}
                                height={65}
                                alt='/'
                            />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>NextJs</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Skills