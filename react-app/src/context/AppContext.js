import React, { createContext, useContext, useState, useRef, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {



    const [showHolder, setShowHolder] = useState(false);



    return (
        <AppContext.Provider
            value={{
                showHolder,
                setShowHolder,
            }}
        >
            {children}
        </AppContext.Provider>
    );




}


export function useAppContext() {
    return useContext(AppContext);
}
