import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import yo from "@/src/yo.jpg";

export default function Sobremi() {
    return (
        <div>
            <div>
                <nav className="flex justify-center py-9 px-20 bg-[#131111] ">
                    <div className="flex text-[#13A8AD]">
                        <a href="/" className="mr-20">Inicio</a>
                        <a href="/sobremi" className="mr-20">Sobre mí</a>
                        <a href="/experiencias" className="mr-20">Experiencias</a>
                        <a href="/proyectos" className="mr-20">Proyectos</a>
                    </div>
                </nav>
            </div>
            <div className="flex flex-row py-20 pt-32 px-20 bg-[#DDDDDD] min-h-screen">
                <Card className="p-10 mt-4 w-2/3">
                    <div className="flex justify-center relative flex-col items-center">
                        <Avatar className="rounded-full w-50 h-50 sm:w-58 sm:h-58 md:w-66 md:h-66 lg:w-74 lg:h-74">
                            <AvatarImage src="https://github.com/shadcn.png" alt="yo" />
                            <AvatarFallback>
                                CHV
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute top-65 left-35 bg-[#13A8AD] text-white w-55 h-10 rounded-lg">
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
                        <h2 className="text-2xl font-bold">Universidad</h2>
                        <div className="mt-4">
                            <h3 className="text-xl text-gray-500">Ingeniero en informatica - Licenciado en las ciencias de la computación </h3>
                            <p className="text-justify mt-2"></p>
                        </div>
                    </Card>
                    <Card className="p-4 mt-10 min-w-1/3 min-h-30%">
                        <h2 className="text-2xl font-bold">Actualidad</h2>
                        <div className="mt-4">
                            <h3 className="text-xl text-gray-500">Ingeniero en informatica - Desarrollador Fullstack</h3>
                            <p className="text-justify mt-2"></p>
                        </div>
                    </Card>
                    <Card className="p-4 mt-10 min-w-1/3 min-h-30%">
                        <h2 className="text-2xl font-bold">Futuro</h2>
                        <div className="mt-4">
                            <h3 className="text-xl text-gray-500">Planes para el futuro</h3>
                            <p className="text-justify mt-2"></p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}