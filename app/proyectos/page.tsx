import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import apprazi from "@/src/apprazi.jpg";

export default function Experiencias() {
    return (
        <div className="bg-[#DDDDDD] min-h-screen">
            <nav className="flex justify-center py-9 px-20 bg-[#131111] ">
                <div className="flex text-[#13A8AD]">
                    <a href="/" className="mr-20">Inicio</a>
                    <a href="/sobremi" className="mr-20">Sobre mí</a>
                    <a href="/experiencias" className="mr-20">Experiencias</a>
                    <a href="/proyectos" className="mr-20">Proyectos</a>
                </div>
            </nav>
            <div>
                <Card className="p-4 mt-10 min-w-1/3 mr-30 ml-30">
                    <div className="flex flex-row items-center">
                        <div className="m-10 relative min-w-1/7">
                            <Image src={apprazi} alt="yo" width={400} height={400} className="" />
                            <div className="absolute left-5 relative bg-[#13A8AD] text-white w-55 h-10 rounded-lg">
                                <p className="text-xl text-center justify-center align-center">Proyecto 1</p>
                            </div>
                        </div>

                        <div className="">
                            <p className=" text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at blandit odio. Aenean et luctus nibh.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at blandit odio. Aenean et luctus nibh.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4 mt-10 min-w-1/3 mr-30 ml-30">
                    <div className="flex flex-row items-center">
                        <div className="m-10 relative min-w-1/7">
                            <Image src={apprazi} alt="yo" width={400} height={400} className="" />
                            <div className="absolute left-5 relative bg-[#13A8AD] text-white w-55 h-10 rounded-lg">
                                <p className="text-xl text-center justify-center align-center">Proyecto 2</p>
                            </div>
                        </div>

                        <div className="">
                            <p className=" text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at blandit odio. Aenean et luctus nibh.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at blandit odio. Aenean et luctus nibh.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,
                            </p>
                        </div>
                    </div>
                </Card>
                <Card className="p-4 mt-10 min-w-1/3 mr-30 ml-30">
                    <div className="flex flex-row items-center">
                        <div className="m-10 relative min-w-1/7">
                            <Image src={apprazi} alt="yo" width={400} height={400} className="" />
                            <div className="absolute left-5 relative bg-[#13A8AD] text-white w-55 h-10 rounded-lg">
                                <p className="text-xl text-center justify-center align-center">Proyecto 3</p>
                            </div>
                        </div>

                        <div className="">
                            <p className=" text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at blandit odio. Aenean et luctus nibh.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at blandit odio. Aenean et luctus nibh.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,Nam elementum venenatis nisl, vel pellentesque lorem finibus eget.
                                Vivamus semper mollis aliquet. Quisque molestie diam sed lobortis molestie. Nullam rhoncus arcu ut bibendum pharetra.
                                Donec a rhoncus turpis. Praesent vulputate, nibh sed bibendum vehicula, dolor lorem dapibus felis,
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
