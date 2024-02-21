import TechnologyHero from "../features/technology/TechnologyHero"
import { motion } from "framer-motion"

const Technology = () => {
    return (
        <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}} 
        >
            <TechnologyHero/>
        </motion.div>
    )
}

export default Technology