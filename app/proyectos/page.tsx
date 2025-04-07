import { Card } from "@/components/ui/card";
import Image from "next/image";
import petlooking from "@/src/petlooking.png";
import bip from "@/src/bip.png";
import stopching from "@/src/stopching.png";
import Link from "next/link";

export default function Experiencias() {
    return (
        <div className="bg-[#DDDDDD] min-h-screen">
            <nav className="flex justify-center py-9 px-20 bg-[#131111] ">
                <div className="flex text-[#13A8AD]">
                    <Link href="/" className="mr-20">Inicio</Link>
                    <Link href="/sobremi" className="mr-20">Sobre mí</Link>
                    <Link href="/experiencias" className="mr-20">Experiencias</Link>
                    <Link href="/proyectos" className="mr-20">Proyectos</Link>
                </div>
            </nav>
            <div>
                <Card className="p-4 mt-10 min-w-1/3 mr-30 ml-30">
                    <div className="flex flex-row items-center">
                    <div className="m-10 relative min-w-[12rem] max-w-[24rem] flex flex-col items-center">
                        <Image src={petlooking} alt="yo" width={550} height={550} className="rounded-xl" />
                        <div className="bg-[#13A8AD] w-55 h-10 text-white w rounded-lg flex items-center justify-center mt-4">
                            <p className="text-[clamp(1.25rem, 2.5vw, 1.5rem)] text-center font-semibold">Proyecto 2</p>
                        </div>
                    </div>

                        <div>
                            <p className="text-justify text-base md:text-lg lg:text-xl">
                                Fue mi primera pagina web, la cual fue creada como proyecto universitario. hecha en HTML, CSS y JS.
                                <br />
                                <br />
                                En esta pagina puedes encontrar una lista de mascotas en adopcion, donde puedes ver la informacion de cada mascota y su dueño.
                                <br />
                                <br />
                                La pagina fue creada con el objetivo de ayudar a las mascotas en adopcion a encontrar un hogar, y a los dueños a encontrar una mascota.
                                <br />
                                <br />
                                Sin embargo, la pagina no fue publicada, ya que no era el objetivo principal, al estar comenzando la carrera y no tener los conocimientos necesarios para hacerlo.
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4 mt-10 min-w-1/3 mr-30 ml-30">
                    <div className="flex flex-row items-center">
                    <div className="m-10 relative min-w-[12rem] max-w-[24rem] flex flex-col items-center">
                        <Image src={bip} alt="yo" width={550} height={550} className="rounded-xl" />
                        <div className="bg-[#13A8AD] w-55 h-10 text-white w rounded-lg flex items-center justify-center mt-4">
                            <p className="text-[clamp(1.25rem, 2.5vw, 1.5rem)] text-center font-semibold">Proyecto 2</p>
                        </div>
                    </div>

                        <div>
                            <p className="text-justify text-base md:text-lg lg:text-xl">
                                Segundo proyecto en el que participé, el cual fue creado como proyecto universitario. hecha en HTML, CSS y JS.
                                <br />
                                <br />
                                Pero esta vez queria usar nuevas tecnologías como React y Next.js. ademas de el uso de API&rsquo;s para el manejo de datos.
                                <br />
                                <br />
                                El objetivo de esta pagina era ver el uso de API&rsquo;s y el manejo de datos, en la cual se podia visualizar el saldo real que contenia la tarjeta bip.
                                <br />
                                <br />
                                Además de tener un añadido de un mapa, el cual mostraba los buses cercanos a la ubicacion del usuario.
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4 mt-10 min-w-1/3 mr-30 ml-30">
                    <div className="flex flex-row items-center">
                        <div className="m-10 relative min-w-[12rem] max-w-[24rem] flex flex-col items-center">
                            <Image src={stopching} alt="yo" width={550} height={550} className="rounded-xl" />
                            <div className="bg-[#13A8AD] w-55 h-10 text-white w rounded-lg flex items-center justify-center mt-4">
                                <p className="text-[clamp(1.25rem, 2.5vw, 1.5rem)] text-center font-semibold">Proyecto 2</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-justify text-base md:text-lg lg:text-xl">
                                Este ha sido el proyecto más importantes que he ralizado debido a que fue mi tesis de la carrera.
                                <br />
                                <br />
                                Ha sido el desafio mas grande al que me he enfrentado ya que fue el primer proyecto en el que use IA como principal funcionamiento de este.
                                <br />
                                <br />
                                Fue una aplicación movil hecha con Ionic 5 y Angular, haciendo uso de API&rsquo;s para consultar resultados de la IA, la cual se encargaba
                                de califiar noticas en reales, falsas u opiniones.
                                <br />
                                <br />
                                Este proyecto fue un completo exito, ya que fue presentado en la universidad y fue muy bien recibido por los profesores y alumnos.
                                siendo calificado con la nota maxima en la defensa.
                                <br />
                                <br />
                                además de haber sido presentada en una feria de tecnologia, donde fue muy bien recibida por el publico.
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
