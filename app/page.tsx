import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import yo from "@/src/yo.jpg"
import sobremi from "@/src/Sobremi.png"

export default function Home() {
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
      <div className="flex flex-col justify-start min-h-screen py-2 pt-32 px-20 bg-[#DDDDDD]">

        <Card className="p-4">
          <div className="flex justify-around ">
            <div className="relative">
              {/* <Image src={yo} alt="yo" width={400} height={400} className="rounded-full" /> */}
              <Avatar className="w-50 h-50 sm:w-58 sm:h-58 md:w-66 md:h-66 lg:w-74 lg:h-74">
                <AvatarImage src={yo.src} alt="yo" />
                <AvatarFallback>
                  CHV
                </AvatarFallback>
              </Avatar>
              {/* Div superpuesto */}
              <div className="absolute top-65 left-10 bg-[#13A8AD] text-white w-55 h-10 rounded-lg">
                <p className="text-xl text-center justify-center align-center">Cristobal Herrera Vega</p>
              </div>
            </div>
            <div className="text-justify w-2/3">
              {`Ingeniero informático titulado de la universidad Bernardo O’Higgins.
                Participación en cursos de Excel, creación de macros, visual Basic, metodologías agiles, Django e inglés.
                Experiencia en proyectos de programación web (React y nodeJS) y móvil (Angular con Ionic 6).
                En su tiempo libre ha probado tecnologías tales como React (nextJS), MongoDB y Python.
                Cuenta con una habilidad comunicacional excepcional para discutir y planificar soluciones de problemas y llevarlas
                a cabo, una habilidad técnica que le permite desarrollar funciones siguiendo buenas prácticas facilitando la
                comprensión futura del trabajo hecho, posee bastos conocimientos en manejo de versiones con GIT y gitLab,
                conocimientos en Javascript, Typescript y solidas habilidades usando SQL.
                Facilidad para integrarse a equipos de trabajo y adaptarse a su forma de trabajar, capacidad para trabajar bajo
                presión, y confiar en el equipo de desarrollo, flexible, trabajo en equipo, pensamiento crítico y orientación al cliente. `.split('.').map((sentence, index) => (
                <p key={index} className="mb-2">
                  {sentence.trim() && `${sentence.trim()}.`}
                </p>
              ))}
            </div>
          </div>
          {/* <div className="mt-8 flex justify-end">
          <Button variant="secondary" size="lg">
            Get started
          </Button>
        </div> */}
        </Card>
        <div className="flex flex-row justify-between mt-4 space-x-5">
          <Card className="p-4 mt-4 min-w-1/3">
            <h2 className="text-2xl font-bold">Sobre mi</h2>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Ingeniero en informatica </h3>
              <p className="text-sm text-gray-500">Licenciado en ciencias de la compuetación</p>
              <p className="mt-8 text-justify">
                Ingeniero informático titulado de la universidad Bernardo O’Higgins.
                Experiencia en desarrollo web y móvil.
                Conocimientos en lenguajes de programación como JavaScript, Python y TypeScript.
                Experiencia en el diseño y desarrollo de aplicaciones web y móviles.
                Experiencia en el trabajo con bases de datos y sistemas operativos.
              </p>
            </div>
            <div className="flex justify-end">
              <Button variant="default" size="lg" className="bg-[#13A8AD] text-white" asChild>
                <a href="/sobremi" rel="noopener noreferrer">
                  Ver más
                </a>
              </Button>
            </div>
          </Card>
          <Card className="p-4 mt-4 min-w-1/3">
            <h2 className="text-2xl font-bold">Proyectos</h2>
            <div className="mt-4">
              <h3 className="text-xl font-bold">Participación en diversos proyectos </h3>
              <p className="text-sm text-gray-500">Principalmente academicos</p>
              <p className="mt-8 text-justify">
                Estos proyectos han sido principalmente académicos, en los cuales he trabajado en equipo para desarrollar aplicaciones web y móviles.
                Algunos de los proyectos en los que he participado incluyen el desarrollo de una aplicación web para comprobar estado de tarjeta bip mediante una API
                y el desarrollo de una aplicación móvil la cual detecta noticias que son potencialmente falsas haciendo uso de IA.

              </p>
            </div>
            <div className="flex justify-end">
              <Button variant="default" size="lg" className="bg-[#13A8AD] text-white">
                <a href="/proyectos" rel="noopener noreferrer">
                  Ver más
                </a>
              </Button>
            </div>
          </Card>
        </div>
        <Card className="p-4 mt-10 min-w-1/2">
          <h2 className="text-2xl font-bold">Experiencias</h2>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Mi paso por el mundo laboral</h3>
            <p className="text-sm text-gray-500">Lugares donde he trabajado y lo que he aprendido</p>
            <p className="mt-8">
              Si bien tengo poca experiencia laboral, he trabajado en un par de enmpresas en las cuales he aprendido mucho.
              En mi primer trabajo (practica laboral en este caso), en la empresa de desarrollo de software para fotografos "Aprazzi" tuve la oportunidad de trabajar en el desarrollo de aplicaciones web y móviles.
              En mi segundo trabajo, en la empresa de desarrollo de software para mineras "Psinet" tuve la oportunidad de trabajar como analista de datos, llevando acabo proyectos con IA principalmete.
            </p>
          </div>
          <div className="flex justify-end">
            <Button variant="default" size="lg" className="bg-[#13A8AD] text-white">
              <a href="/experiencias" rel="noopener noreferrer">
                Ver más
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>


  );
}
