import { Route, Routes, useLocation } from 'react-router-dom'
import Pages from '../constants/Pages'
import { ReactElement } from 'react'

interface Page {
    name:string,
    href:string,
    component:ReactElement
}

const AnimatedRoutes = () => {
    
    const location = useLocation()

    return (
            
            <Routes location={location} key={location.pathname}>

                {
                    Pages.map((page : Page,idx :number) => (
                        <Route
                            path={page.href}
                            key={idx}
                            element={page.component}
                        />
                    ))
                }

            </Routes>
        

    )
}

export default AnimatedRoutes