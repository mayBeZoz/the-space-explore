import { useState } from "react"
import PlanetImg from "./components/PlanetImg"
import PlanetInfos from "./components/PlanetInfos"



const DestinationHero = () => {
    

    const [currDestinationName,setCurrDestinationName] = useState<string>("Moon")
  

    return (
        <div className="w-full pb-6 bg-[url(/images/destination/background.jpg)] bg-cover md:h-[120vh] pt-[140px]">
            
            <div className="container flex flex-col h-full">
               
                <h2 className="text-3xl my-5 tracking-[3px] uppercase">
                    <span className="mr-2 text-zinc-500">01</span>
                    <span>pick your destination</span>                
                </h2>

                <div className="flex-1 gap-5 flex md:flex-row flex-col w-full">
                    <PlanetImg currDestinationName={currDestinationName}/>
                    <PlanetInfos currDestinationName={currDestinationName} setCurrDestinationName={setCurrDestinationName}/>
                </div>

            
            </div>
        </div>
    )
}

export default DestinationHero