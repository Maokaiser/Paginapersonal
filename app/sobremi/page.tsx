import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import yo from "@/src/yo.jpg";
import Link from "next/link";

export default function Sobremi() {
    return (
        <div>
            <div>
            <nav className="flex justify-center py-9 px-20 bg-[#131111] ">
                <div className="flex text-[#13A8AD]">
                    <Link href="/" className="mr-20">Inicio</Link>
                    <Link href="/sobremi" className="mr-20">Sobre mí</Link>
                    <Link href="/experiencias" className="mr-20">Experiencias</Link>
                    <Link href="/proyectos" className="mr-20">Proyectos</Link>
                </div>
            </nav>
            </div>
            <div className="flex flex-row py-20 pt-32 px-20 bg-[#DDDDDD] min-h-screen">
                <Card className="p-10 mt-4 w-2/3">
                    <div className="flex justify-center relative flex-col items-center">
                        <Avatar className="rounded-full w-50 h-50 sm:w-58 sm:h-58 md:w-66 md:h-66 lg:w-74 lg:h-74">
                            <AvatarImage src={yo.src} alt="yo" />
                            <AvatarFallback>
                                CHV
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute top-65 bg-[#13A8AD] text-white w-55 h-10 rounded-lg">
                            <p className="text-xl text-center justify-center align-center">Cristobal Herrera Vega</p>
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
                </Card>
                <div className="flex flex-col py-2 pt-0 px-20 w-12/10 h-full">
                    <Card className="p-4 mt-4 min-w-1/3 min-h-30%">
                        <h2 className="text-2xl font-bold">Universidad Bernardo O&rsquo;Higgins </h2>
                        <div className="mt-4">
                            <h3 className="text-xl text-gray-500">Ingeniero en informatica - Licenciado en las ciencias de la computación </h3>
                            <p className="text-justify mt-2"> Comencé mi carrera universitaria en marzo de 2019, logrando titularme aprobando la tesis en enero de 2023
                                y obteniendo el título de ingeniero en informática. Durante mi formación, adquirí conocimientos en programación, desarrollo de software y gestión de proyectos. Participé en diversas actividades académicas y extracurriculares que me permitieron fortalecer mis habilidades técnicas y blandas, así como trabajar en equipo y desarrollar proyectos innovadores.
                                Mi experiencia en la universidad me brindó una sólida base en el campo de la informática y me preparó para enfrentar los desafíos del mundo laboral. Estoy emocionado por aplicar mis conocimientos y habilidades en un entorno profesional y seguir aprendiendo y creciendo en mi carrera.
                            </p>
                        </div>
                    </Card>
                    <Card className="p-4 mt-10 min-w-1/3 min-h-30%">
                        <h2 className="text-2xl font-bold">Actualidad</h2>
                        <div className="mt-4">
                            <h3 className="text-xl text-gray-500">Ingeniero en informatica - Desarrollador Fullstack</h3>
                            <p className="text-justify mt-2">
                                Actualmente me encuentro en búsqueda activa de empleo, ya que tengo un gran interés por aprender y crecer en el ámbito laboral. Estoy dispuesto a asumir nuevos desafíos y responsabilidades que me permitan desarrollar mis habilidades y adquirir experiencia en el campo de la tecnología. Mi objetivo es encontrar una oportunidad laboral que me permita aplicar mis conocimientos y contribuir al éxito de la empresa.
                                Estoy abierto a trabajar en proyectos desafiantes y colaborar con un equipo de profesionales apasionados por la tecnología. Estoy seguro de que mi formación académica y mi entusiasmo por aprender me permitirán adaptarme rápidamente a cualquier entorno laboral y contribuir de manera efectiva al equipo.
                                Estoy comprometido a seguir aprendiendo y creciendo en mi carrera profesional, y estoy emocionado por las oportunidades que el futuro me depara. Estoy listo para enfrentar nuevos desafíos y contribuir al éxito de la empresa en la que trabaje.
                            </p>
                        </div>
                    </Card>
                    <Card className="p-4 mt-10 min-w-1/3 min-h-30%">
                        <h2 className="text-2xl font-bold">Futuro</h2>
                        <div className="mt-4">
                            <h3 className="text-xl text-gray-500">Planes para el futuro</h3>
                            <p className="text-justify mt-2">
                                En el futuro, tengo la intención de seguir creciendo y desarrollándome en el campo de la tecnología. Me gustaría especializarme en áreas como inteligencia artificial, desarrollo de aplicaciones móviles y tecnologías emergentes. Estoy interesado en aprender nuevas herramientas y lenguajes de programación que me permitan ampliar mis habilidades y conocimientos.
                                Además, me gustaría participar en proyectos innovadores que tengan un impacto positivo en la sociedad y contribuir al desarrollo de soluciones tecnológicas que mejoren la calidad de vida de las personas. Estoy emocionado por las oportunidades que el futuro me depara.
                                A largo plazo, me gustaría asumir roles de liderazgo en proyectos tecnológicos y contribuir al desarrollo de estrategias que impulsen la innovación y el crecimiento en el campo de la tecnología. Estoy convencido de que la tecnología tiene el potencial de transformar el mundo y estoy ansioso por ser parte de ese cambio.
                                Estoy emocionado por las oportunidades que el futuro me depara. Estoy listo para enfrentar nuevos desafíos y contribuir al éxito de la empresa en la que trabaje.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}