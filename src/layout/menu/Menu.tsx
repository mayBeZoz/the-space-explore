import { AnimatePresence, motion } from "framer-motion"
import { useGlobalContext } from "../../contexts/GlobalContext"
import Pages from "../../constants/Pages"
import { Link } from "react-router-dom"
import { ReactElement } from "react"

interface Page {
    name:string,
    href:string,
    component:ReactElement
}

const Menu = () => {
    
    const data : {
        menu: {
            showMenu:boolean,
            toggleMenu: () => void
        }
    } | undefined  = useGlobalContext()

    return (
        <AnimatePresence>
            {
                data?.menu.showMenu &&
                (<motion.div  
                    initial={{transform:`translateX(100%)`}}
                    animate={{transform:`translateX(0%)`}}
                    exit={{transform:`translateX(100%)`}}
                    transition={{
                        duration:.3,
                        ease:"easeInOut"
                    }}
                    className="w-3/4 md:hidden h-screen pt-[140px] fixed top-0 right-0 z-[300] backdrop-blur-md"
                >

                    <ul className="h-full w-full p-6 flex flex-col">
                        {
                            Pages.map((page :Page,idx:number)=> (
                                <li className="flex-1 items-center uppercase flex text-4xl" key={idx}>

                                    <Link to={page.href} onClick={data.menu.toggleMenu}>
                                        <span className="font-bold mr-2">0{idx}</span>
                                        <span>{page.name}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    

                </motion.div>)

            }   
        </AnimatePresence>
        
        
    )
}

export default Menu