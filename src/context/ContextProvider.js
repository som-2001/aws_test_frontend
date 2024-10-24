import { createContext, useState } from "react";

export const context=createContext(null);

export const ContextProvider=({children})=>{

    const [count,setCount]=useState(0);
    return(
        <context.Provider value={{count,setCount}}>
            {children}
        </context.Provider>
    )

}