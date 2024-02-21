import { motion } from "framer-motion"
import Destinations from "../../../constants/Destination"

interface Props {
    currDestinationName:string,
    setCurrDestinationName: (newDest : string) => void
}

interface Destination {
    name:string,
    images:{
        png:string,
        webp:string
    },
    description:string,
    distance:string,
    travel:string
}

const PlanetInfos = ({currDestinationName,setCurrDestinationName} : Props) => {
    
    const destinationsNames :string[] = ["Moon","Mars","Europa","Titan"]
    
    const currDestination : (Destination | undefined) = Destinations.find((dest: Destination) => dest.name === currDestinationName)


    return (
        <div className="w-full md:text-left text-center h-[clac(100% - 200px)] md:h-full md:w-[40%] flex flex-col md:items-start items-center p-3 ">
            
            <div className="md:w-4/5 mb-16 w-full flex justify-between items-center">
                {
                    destinationsNames.map((destName: string,idx: number) => (
                        <span
                            className={`cursor-pointer border-b-4 pb-2 uppercase border-main-lightblue ease-06 text-md ${currDestinationName == destName && "text-white !border-white"} text-main-lightblue `}
                            key={idx}
                            onClick={()=> setCurrDestinationName(destName)}
                        >
                            {destName}
                        </span>
                    ))
                }
            </div>
            

            <motion.h2
                initial={{opacity:0}}
                animate={{opacity:1}}
                key={currDestination?.name}
                className=" text-7xl mb-15 sm:text-8xl font-bold uppercase font-bellefair"
            >
                {currDestination?.name}
            </motion.h2>
            
            <motion.p
                initial={{opacity:0}}
                animate={{opacity:1}}
                key={currDestination?.description}
                className=" text-main-lightblue text-xl mb-15"
            >
                {currDestination?.description}
            </motion.p>

            <span className="w-full my-6 opacity-40 bg-white block h-[1px] " />


            <div className="flex gap-5 uppercase justify-center md:justify-between items-center w-full">
                <div className="flex flex-col">
                    
                    <p className=" mb-2 text-main-lightblue text-md ">AVG . Deistance</p>


                    <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        key={currDestination?.distance}
                        className=" text-white font-bellefair text-4xl"
                    >{currDestination?.distance}</motion.p>
                </div>
                <div className="flex flex-col">

                    <p className=" mb-2 text-main-lightblue text-md ">EST. TRAVEL TIME</p>

                    <motion.p
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        key={currDestination?.travel}
                        className=" text-white font-bellefair text-4xl"
                    >{currDestination?.travel}</motion.p>
                </div>
            </div>

        </div>
    )
}

export default PlanetInfos