/* eslint-disable react/no-unescaped-entities */
function About() {
    return(
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2 ">
                    <h2 className="mb-[3%]">About</h2>
                    <h3 className="mb-[2%] ">Qui suis je</h3>
                    <p className="text-gray-600">J'ai 23 ans et j'habite à Coudekerque-Branche dans le Haut-de-France. J'ai faits des études 
                        dans le dévelopement web en faisant un BTS en informatique et réseau et une Licence professionnelle en développement web et mobile.</p>
                    <p className="text-gray-600">J'ai faits ensuite une formation en JavaScript et React chez OpenClassrooms pour perfectionner mes compétences dans ce domaine. Et
                    je commence à apprendre le framework NextJs.</p>
                    <p className="text-gray-600"> Je suis quelqu'un de curieux, dynamique et toujours motiver pour réaliser des projets en développemet web.</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default About