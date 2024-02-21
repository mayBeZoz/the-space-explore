import { BrowserRouter} from "react-router-dom"
import AnimatedRoutes from "./AnimatedRoutes"
import Header from "../layout/header/Header"
import { ReactLenis } from '@studio-freight/react-lenis'
import Menu from "../layout/menu/Menu"


function App() {

    return (
      <>
            <BrowserRouter>

                <ReactLenis root>
                    <Header/>

                    <AnimatedRoutes/>

                    <Menu/>
                </ReactLenis>
                

            </BrowserRouter>
      </>
    )
}

export default App
