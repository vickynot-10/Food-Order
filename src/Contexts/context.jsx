import { createContext, useState } from "react";

export const OptionsContext=createContext();

export function OptionsContextProvider({ children }){
    const [isActive,setActive]=useState('diningout');
    return(
        <OptionsContext.Provider value={ {isActive,setActive} }>
            {children}
        </OptionsContext.Provider>
    )
}