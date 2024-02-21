import { useState } from "react"
import technology from "../../constants/Technology"
import TechnologyImg from "./components/TechnologyImg"
import TechnologyInfos from "./components/TechnologyInfos"

interface Technology {
    name:string,
    images:{
        portrait:string,
        landscape:string
    },
    description:string
}

const ProjectsHero = () => {
    
    const [currTechnology,setCurrTechnology] = useState<Technology>(technology[0])

    return (
        <div className="w-full pb-6 md:bg-[url(/images/technology/large.jpg)] bg-[url(/images/technology/small.jpg)] bg-cover h-[160vh] md:h-[120vh] pt-[140px]">
        
            <div className="container flex flex-col h-full">
                <h2 className="text-3xl my-5 mb-10 tracking-[3px] uppercase">
                    <span className="mr-2 text-zinc-500">03</span>
                    <span>space launch 101</span>                
                </h2>

                <div className="flex-1 gap-5 flex md:flex-row-reverse flex-col">

                    <TechnologyImg currTechnology={currTechnology}/>
                    <TechnologyInfos currTechnology={currTechnology} setCurrTechnology={setCurrTechnology}/>

                </div>
            </div>
        </div>
    )
}

export default ProjectsHero