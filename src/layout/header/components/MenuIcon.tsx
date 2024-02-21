import { useGlobalContext } from "../../../contexts/GlobalContext"

const MenuIcon = () => {
    
    const data : {
        menu: {
            showMenu:boolean,
            toggleMenu: () => void
        }
    } | undefined  = useGlobalContext()

    
    return (
        <div onClick={data?.menu.toggleMenu} className={`w-[35px] items-center h-[15px] relative justify-between md:hidden cursor-pointer flex flex-col`}>

            <span className={`w-full ${data?.menu.showMenu && 'rotate-45 -translate-y-1/2 top-1/2'} top-0 absolute ease-06 bg-main-lightblue h-[3px]`}/>
            <span className={`w-full ${data?.menu.showMenu && '-rotate-45 translate-y-1/2 bottom-1/2'} bottom-0 absolute ease-06 bg-main-lightblue h-[3px]`}/>

        </div>
    )
}

export default MenuIcon