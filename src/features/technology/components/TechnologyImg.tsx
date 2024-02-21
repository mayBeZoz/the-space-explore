import { AnimatePresence, motion } from "framer-motion"

interface Technology {
    name:string,
    images:{
        portrait:string,
        landscape:string
    },
    description:string
}


interface Props {
    currTechnology:Technology
}

const TechnologyImg = ({currTechnology}:Props) => {
    return (
        <div className="md:w-1/2 md:h-full relative w-full h-1/2 ">

            <AnimatePresence>
                <motion.img
                    animate={{opacity:1}}
                    exit={{opacity:0}}
                    initial={{opacity:0}}
                    className="w-full h-full object-cover absolute left-0 bottom-0"
                    src={currTechnology.images.portrait}
                    alt="img"
                    key={currTechnology.images.portrait}
                />
            </AnimatePresence>
        
        </div>
    )
}

export default TechnologyImg