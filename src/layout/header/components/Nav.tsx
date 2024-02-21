import { Link } from "react-router-dom"
import Pages from "../../../constants/Pages"
import { ReactElement } from "react"

interface Page {
    name:string,
    href:string,
    component:ReactElement
}

const Nav = () => {
    
    return (
        <nav className="flex-1 h-full hidden md:flex items-center">

            <span className="w-full h-[.5px] bg-white right-[-20%] absolute"/>


            <ul className="w-2/3 h-full pr-[5%] items-center justify-evenly right-0 flex absolute backdrop-blur-xl">
                {
                    Pages.map((page :Page,idx: number) => (
                        <li className="uppercase text-md tracking-wider" key={idx}>
                            <Link to={page.href}>
                                <span className="mr-3 font-[600]">0{idx}</span>
                                <span>{page.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>


        </nav>
    )
}

export default Nav