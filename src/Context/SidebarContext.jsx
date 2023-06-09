import React from "react";
import { useState } from "react";
import { createContext } from "react";

// Create Context
export const SidebarContext = createContext();

const SidebarProvider =({children}) => {
    // Sidebar state
    const[isOpen, setIsOpen] = useState(false);

    const handleClose = ()=>{
        setIsOpen(false);
    };

    return <SidebarContext.Provider value={{isOpen,setIsOpen,handleClose}}>
        {children}
    </SidebarContext.Provider>
}

export default SidebarProvider;
