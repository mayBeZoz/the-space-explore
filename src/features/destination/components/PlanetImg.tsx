import { AnimatePresence, motion } from "framer-motion"
import Destinations from "../../../constants/Destination"

interface Props {
    currDestinationName:string,
}


const PlanetImg = ({currDestinationName} : Props) => {
    
    const currPlanet = Destinations.find(dest => dest.name === currDestinationName)

    return (
        <div className="w-full h-[200px] md:h-full md:w-[60%] relative">

            <AnimatePresence>

                <motion.img 
                    key={currPlanet?.name}
                    exit={{opacity:0}}
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    src={currPlanet?.images.webp}
                    alt="planet"
                    className="md:w-4/5 p-3 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square object-cover w-[250px]"
                />
            
            </AnimatePresence>             
                
        </div>
    )
}

export default PlanetImg