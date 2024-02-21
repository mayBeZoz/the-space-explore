import { ReactElement } from "react"
import Home from "../pages/Home"
import Technology from "../pages/Technology"
import Destination from "../pages/Destination"
import Crew from "../pages/Crew"

interface Page {
    name:string,
    href:string,
    component:ReactElement
}

const Pages : Page[] = [
    
    {
        name:"home",
        href:"/",
        component:<Home/>
    },
    {
        name:"Crew",
        href:"/crew",
        component:<Crew/>
    },
    {
        name:"Destination",
        href:"/destination",
        component:<Destination/>
    },
    {
        name:"Technology",
        href:"/technology",
        component:<Technology/>
    },
]



export default Pages