import { HomeHero } from "../features/home/HomeHero"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.div
            animate={{opacity:1}}
            initial={{opacity:0}}        
        >
            <HomeHero/>
        </motion.div>
    )
}

export default Home