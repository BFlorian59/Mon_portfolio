import ProjectsItems from "./projectItems"
import imgKasa from "../../public/assets/projets/p11.png"
import imglespetitsplats from "../../public/assets/projets/lespetitsplats.png"
import imgagentbank from "../../public/assets/projets/agentbank.png"
import imgfisheye from "../../public/assets/projets/fisheye.png"
import imgohmyfood from "../../public/assets/projets/ohmyfood.png"
/* eslint-disable react/no-unescaped-entities */

function Projects() {
    return(
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto py-16 px-2">
                <h2 className="mb-[3%] text-xl tracking-widest uppercase text-[#5651e1]">Mes projets</h2>
                <h3 className="py-4">Mes projets que j'ai réalisé.</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectsItems title='Projet Kasa' made='Fait en ReactJs' image={imgKasa} url='/kasa' />
                    <ProjectsItems title='Projet Les petits plats' made='Fait en JavaScript' image={imglespetitsplats} url='/lespetitsplats' />
                    <ProjectsItems title='Projet Agent Bank' made='Fait en React-Redux' image={imgagentbank} url='/agentbank' />
                    <ProjectsItems title='Projet Fisheye' made='Fait en JavaScript' image={imgfisheye} url='/fisheye' />
                    <ProjectsItems title='Projet Ohmyfood' made='Fait en HTML/CSS' image={imgohmyfood} url='/ohmyfood' />
                </div>
            </div>
        </div>
    )
}

export default Projects