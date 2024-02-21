 import { ReactNode, createContext, useContext, useState } from 'react';

interface ContextProps {
    children:ReactNode
}

interface ContextValue {
    menu : {
        toggleMenu:() => void,
        showMenu : boolean
    }
}

const Context = createContext<ContextValue | undefined>(undefined);


const GlobalContext = ({ children } : ContextProps) => {

    const [showMenu,setShowMenu] = useState<boolean>(false)

    const data = {
        menu : {
            toggleMenu: () => setShowMenu(!showMenu),
            showMenu
        }
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    );
};


export default GlobalContext

export const useGlobalContext = () => useContext(Context);
