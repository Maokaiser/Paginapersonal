import Image from "next/image"
import apprazi from "@/src/apprazi.jpg"
import psinet from "@/src/psinet.png"
import Link from "next/link"

export default function Experiencias() {
    return (
        <div>
            <nav className="flex justify-center py-9 px-20 bg-[#131111] ">
                <div className="flex text-[#13A8AD]">
                    <Link href="/" className="mr-20">Inicio</Link>
                    <Link href="/sobremi" className="mr-20">Sobre mí</Link>
                    <Link href="/experiencias" className="mr-20">Experiencias</Link>
                    <Link href="/proyectos" className="mr-20">Proyectos</Link>
                </div>
            </nav>
            <div className="flex flex-col min-h-screen py-10 px-50 bg-[#DDDDDD]">
                <div className="flex flex-row justify-center space-x-20 min-h-screen">
                    <div className="p-4 mt-4 min-w-1/2 bg-white rounded-lg shadow-md flex flex-col items-center min-h-screen">
                        <div className="flex flex-col items-center bg-[#13A8AD] pt-2 w-7/10 py-2 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-white">Apprazi</h2>
                        </div>
                        <div className=" rounded-full w-7/10 h-7/10 flex items-center justify-center mt-4">
                            <Image src={apprazi} alt="yo" width={400} height={400} className="rounded-full" />
                        </div>
                        <div >
                            <p className="text-justify text-base md:text-lg lg:text-xl">
                                Empresa centrada en una aplicacion para fotografos de eventos, en la cual fui desarrollador full stack.
                                <br/>
                                <br /> 
                                La aplicación fue hecha en Ionic 6 y Angular, con una base de datos en Firebase.
                                <br />
                                <br />
                                La aplicación permite a los fotógrafos crear eventos, subir fotos y videos, y compartirlos con los clientes.
                                <br />
                                <br />
                                La aplicación fue creada con el objetivo de facilitar el trabajo de los fotógrafos, y permitir a los clientes ver las fotos y videos de los eventos en tiempo real.
                                <br />
                                <br />
                                Fue en esta empresa donde tuve mi primera experiencia laboral (practica profesional), donde aprendí a trabajar en equipo y a desarrollar aplicaciones web y móviles.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 mt-4 min-w-1/2 bg-white rounded-lg shadow-md flex flex-col items-center">
                        <div className="flex flex-col items-center bg-[#13A8AD] pt-2 w-7/10 py-2 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-white">Psinet</h2>
                        </div>
                        <div className=" rounded-full w-7/10 h-7/10 flex items-center justify-center mt-4">
                            <Image src={psinet} alt="yo" width={400} height={400}/>
                        </div>

                        <div>
                            <p className="text-justify text-base md:text-lg lg:text-xl">
                                Empresa la cual hace proyectos tecnologicos al sector minero, donde trabajé como Analista de Datos.
                                <br />
                                <br />
                                Tambien estaban dentro de mis funciones el automatizar procesos que se hacian de forma manual, como la carga de datos o la comprobación de resultados de modelos.
                                En esta empresa trabajé con datos de sensores, donde aprendí a trabajar con datos en tiempo real y a desarrollar aplicaciones web para visualizar los datos.
                                <br />
                                <br />
                                Además tuve la oportunidad de trabajar directamente con los clientes, lo que me permitió aprender a comunicarme de forma efectiva y a entender las necesidades de los clientes.
                                <br />
                                <br />
                                Finalmente en un proyecto me incorporé como desarrollador full stack, donde desarrollé un flujo completo de un proyecto.
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
