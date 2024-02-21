import crew from "../../../constants/Crew"

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
    setCurrCrewMember: (newCrewMember : CrewMember) => void,
    currCrewMember:CrewMember
}   

const ToggleCrewMembers = ({setCurrCrewMember,currCrewMember} : Props) => {
    
    

    return (
        
        <div className="flex items-center justify-between w-2/4 ">
            {
                crew.map((_:CrewMember,idx:number) => (
                    <span
                        key={idx}
                        className={`w-[20px] rounded-full cursor-pointer opacity-60 ease-06 ${crew.indexOf(currCrewMember) == idx && "!opacity-100"} aspect-square bg-white block`}
                        onClick={() => setCurrCrewMember(crew[idx])}
                    />
                ))
            }
        </div>
    )
}

export default ToggleCrewMembers