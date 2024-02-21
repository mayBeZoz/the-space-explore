import { AnimatePresence, motion } from "framer-motion"

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
    currCrewMember: CrewMember
}

const CrewMemberImg = ({currCrewMember} : Props) => {
    
    const crewMemberImg = currCrewMember.images.webp

    return (
        <>
            <div className="h-[300px] flex justify-center md:h-full md:w-1/2 w-full relative">
                <AnimatePresence>
                    <motion.img
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        className="md:w-full absolute bottom-0 w-[300px] object-contain aspect-square"
                        src={crewMemberImg}
                        alt="img"
                    />

    
                </AnimatePresence>
                <span className="w-full md:hidden opacity-40 absolute top-full bg-white block h-[1px]"/>

            </div>

        </>
    )
}

export default CrewMemberImg
