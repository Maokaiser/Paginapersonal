import Image from "next/image"
import apprazi from "@/src/apprazi.jpg"
import psinet from "@/src/psinet.png"

export default function Experiencias() {
    return (
        <div>
            <nav className="flex justify-center py-9 px-20 bg-[#131111] ">
                <div className="flex text-[#13A8AD]">
                    <a href="/" className="mr-20">Inicio</a>
                    <a href="/sobremi" className="mr-20">Sobre mí</a>
                    <a href="/experiencias" className="mr-20">Experiencias</a>
                    <a href="/proyectos" className="mr-20">Proyectos</a>
                </div>
            </nav>
            <div className="flex flex-col justify-start min-h-screen py-10 pt-22 px-50 bg-[#DDDDDD] rounded-lg">
                <div className="flex flex-row justify-center space-x-20 h-screen">
                    <div className="p-4 mt-4 min-w-1/2 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <div className="flex flex-col items-center bg-[#13A8AD] pt-2 w-7/10 py-2 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-white">Apprazi</h2>
                        </div>
                        <div className=" rounded-full w-7/10 h-7/10 flex items-center justify-center mt-4">
                            <Image src={apprazi} alt="yo" width={400} height={400} className="rounded-full" />
                        </div>
                        <div className="text-justify w-2/3 mt-10">
                            {`Estoy en busca de una oportunidad laboral como desarrollador, ya que soy un ingeniero en informática con más de un año de experiencia en desarrollo web y mobile, a lo largo de mi vida desarrollado buenas habilidades en programación y una gran pasión por la tecnología. Aunque mi nivel de inglés no es completamente fluido, estoy seguro de que puedo comunicarme de manera efectiva y aprender rápidamente para mejorar en ese aspecto.
            
                                Como graduado en ingeniería informática, tengo una sólida formación en programación y en el desarrollo de software. Durante mis estudios, he adquirido habilidades en lenguajes de programación como JavaScript, Python y TypeScript, y he aprendido a trabajar con bases de datos y sistemas operativos. Además, he trabajado en varios proyectos durante mi tiempo en la universidad, lo que me ha permitido desarrollar mi capacidad de resolución de problemas y trabajar en equipo.

                                Estoy ansioso a aprender nuevas tecnologías y trabajar duro para adquirir la experiencia necesaria para tener éxito en el campo de la tecnología. Mi entusiasmo y dedicación por la programación, junto con mi formación académica, me hacen un candidato ideal.`.split('.').map((sentence, index) => (
                                <p key={index} className="mb-2">
                                    {sentence.trim() && `${sentence.trim()}.`}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="p-4 mt-4 min-w-1/2 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <div className="flex flex-col items-center bg-[#13A8AD] pt-2 w-7/10 py-2 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-white">Psinet</h2>
                        </div>
                        <div className=" rounded-full w-7/10 h-7/10 flex items-center justify-center mt-4">
                            <Image src={psinet} alt="yo" width={400} height={400}/>
                        </div>

                        <div className="text-justify w-2/3 mt-10">
                            {`Estoy en busca de una oportunidad laboral como desarrollador, ya que soy un ingeniero en informática con más de un año de experiencia en desarrollo web y mobile, a lo largo de mi vida desarrollado buenas habilidades en programación y una gran pasión por la tecnología. Aunque mi nivel de inglés no es completamente fluido, estoy seguro de que puedo comunicarme de manera efectiva y aprender rápidamente para mejorar en ese aspecto.
            
                                Como graduado en ingeniería informática, tengo una sólida formación en programación y en el desarrollo de software. Durante mis estudios, he adquirido habilidades en lenguajes de programación como JavaScript, Python y TypeScript, y he aprendido a trabajar con bases de datos y sistemas operativos. Además, he trabajado en varios proyectos durante mi tiempo en la universidad, lo que me ha permitido desarrollar mi capacidad de resolución de problemas y trabajar en equipo.

                                Estoy ansioso a aprender nuevas tecnologías y trabajar duro para adquirir la experiencia necesaria para tener éxito en el campo de la tecnología. Mi entusiasmo y dedicación por la programación, junto con mi formación académica, me hacen un candidato ideal.`.split('.').map((sentence, index) => (
                                <p key={index} className="mb-2">
                                    {sentence.trim() && `${sentence.trim()}.`}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
