import CrewMemberImg from "./components/CrewMemberImg"
import CrewMemberInfos from "./components/CrewMemberInfos"
import crew from "../../constants/Crew"
import { useState } from "react"

interface CrewMember {
    name:string,
    images: {
        png:string,
        webp:string
    },
    role:string,
    bio:string
}

const CrewHero = () => {

    const [currCrewMember,setCurrCrewMember] = useState<CrewMember>(crew[0])


    return (
        <section className="w-full pt-[140px] text-center md:text-left h-[135vh] md:h-screen md:bg-[url(/images/crew/large.jpg)] bg-[url(/images/crew/small.jpg)] bg-cover">

            <div className="container h-full flex flex-col gap-5">

                <h2 className="text-3xl my-5 tracking-[3px] uppercase">
                    <span className="mr-2 text-zinc-500">02</span>
                    <span>MEET YOUR CREW</span>                
                </h2>

                <div className="flex gap-5 md:flex-row-reverse flex-col flex-1 w-full">

                    <CrewMemberImg currCrewMember={currCrewMember}/>
                    <CrewMemberInfos currCrewMember={currCrewMember} setCurrCrewMember={setCurrCrewMember}/>

                </div>

            </div>

        </section>
    )
}

export default CrewHero