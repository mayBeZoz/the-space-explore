import { Link } from "react-router-dom"
import logo from "/svgs/logo.svg"

const Logo = () => {
    
    return (
        <div className="w-[50px] aspect-square ">
            
            <Link to="/">
                <img src={logo} alt="logo" className="block w-full h-full object-contain" />
            </Link>
        
        </div>
    )
}

export default Logo