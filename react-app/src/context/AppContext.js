import React, { createContext, useContext, useState, useRef, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {



    const [showHolder, setShowHolder] = useState(false);
    const [buttonSelection,setButtonSelection] = useState('About Us')



    return (
        <AppContext.Provider
            value={{
                showHolder,
                setShowHolder,
                buttonSelection,
                setButtonSelection
            }}
        >
            {children}
        </AppContext.Provider>
    );




}


export function useAppContext() {
    return useContext(AppContext);
}
