import DestinationHero from "../features/destination/DestinationHero"
import { motion } from "framer-motion"

const Destination = () => {
    return (
        <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}} 
        >
            <DestinationHero/>
        </motion.div>
    )
}

export default Destination