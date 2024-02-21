import Logo from "./components/Logo"
import MenuIcon from "./components/MenuIcon"
import Nav from "./components/Nav"

const Header = () => {
    
    return (
        <header className="w-full z-[400] h-[100px] fixed top-[40px]">
            
            <div className="container h-full flex items-center justify-between">
                <Logo/>
                <Nav/>
                <MenuIcon/>
            </div>
        
        </header>
    )
}

export default Header