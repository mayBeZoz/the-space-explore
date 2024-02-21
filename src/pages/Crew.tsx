import { motion } from "framer-motion"
import CrewHero from "../features/crew/CrewHero"

const Crew = () => {
    return (
        <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}
        >
            <CrewHero/>
        </motion.div>
    )
}

export default Crew