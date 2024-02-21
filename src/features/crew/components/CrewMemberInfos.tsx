import { motion } from "framer-motion"
import ToggleCrewMembers from "./ToggleCrewMembers"

interface CrewMember {
    name:string,
    images: {
        png:string,
        webp:string
    },
    role:string,
    bio:string
}

interface Props {
    currCrewMember: CrewMember,
    setCurrCrewMember: (newCrewMember : CrewMember) => void
}
const CrewMemberInfos = ({currCrewMember ,setCurrCrewMember} : Props) => {
    
    return (
        <div className="h-[calc(100% - 300px)] justify-center gap-5 flex flex-col items-center md:items-start md:h-full md:w-1/2 w-full relative">

            <motion.h3
                initial={{opacity:0}}
                animate={{opacity:1}}
                key={currCrewMember.role}
                className=" text-zinc-500 font-bellefair font-medium text-4xl"
            >
                {currCrewMember.role}
            </motion.h3>

            <motion.h2
                initial={{opacity:0}}
                animate={{opacity:1}}
                key={currCrewMember.name}
                className="text-white font-bellefair text-6xl"
            >
                {currCrewMember.name}
            </motion.h2>

            <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                key={currCrewMember.bio}
                className="text-main-lightblue text-md mb-7"
            >
                {currCrewMember.bio}
            </motion.p>

            <ToggleCrewMembers currCrewMember={currCrewMember} setCurrCrewMember={setCurrCrewMember}/>
        </div>
    )
}

export default CrewMemberInfos