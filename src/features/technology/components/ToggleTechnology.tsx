import technology from "../../../constants/Technology"

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
    setCurrTechology: (newTechnology: Technology) => void
}

const ToggleTechnology = ({currTechnology,setCurrTechology}:Props) => {
        
    
    return (
        <div className="md:w-[70px] md:h-full justify-center gap-3 md:content-between md:flex-col w-full h-[70px] flex">

            {
                technology.map((_:Technology,idx:number) => (
                    <span
                        key={idx}
                        onClick={() => setCurrTechology(technology[idx])}
                        className={`w-[70px] cursor-pointer aspect-square ${technology.indexOf(currTechnology) === idx && "!bg-white !text-black"} text-white border-2 ease-06 rounded-full flex justify-center items-center text-xl`}
                    >
                        {idx+1}
                    </span>
                ))
            }

        </div>
    )
}

export default ToggleTechnology