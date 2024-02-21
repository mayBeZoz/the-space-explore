import { motion } from "framer-motion"
import ToggleTechnology from "./ToggleTechnology"

interface Technology {
    name:string,
    images:{
        portrait:string,
        landscape:string
    },
    description:string
}


interface Props {
    currTechnology:Technology,
    setCurrTechnology: (newTechnology: Technology) => void
}

const TechnologyInfos = ({currTechnology,setCurrTechnology} :Props) => {
    
    
    return (
        <div className="md:w-1/2 text-center md:text-left md:h-full h-1/2 gap-6 w-full md:flex-row flex flex-col">
            
            <ToggleTechnology currTechnology={currTechnology} setCurrTechology={setCurrTechnology}/>

            <div className="flex flex-col justify-center gap-5 flex-1">

                <p className=" text-main-lightblue text-3xl uppercase">THE TERMINOLOGY</p>

                <motion.h3
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    initial={{opacity:0}}
                    key={currTechnology.name}
                    className="text-7xl font-semibold font-bellefair"
                >
                    {currTechnology.name}
                </motion.h3>

                <motion.p
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    initial={{opacity:0}}
                    key={currTechnology.description}
                    className="text-md text-main-lightblue "
                >
                    {currTechnology.description}
                </motion.p>

            </div>
            
        </div>
    )
}

export default TechnologyInfos