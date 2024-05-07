'use client'

import React, { ReactNode, createContext, useContext, useState } from "react"


interface ContextProps {
  sidebarOpen: boolean,
  setSidebarOpen: (query: boolean) => void
}
const StateContext = createContext<ContextProps | undefined>(undefined)

const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <StateContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateProvider




export const useStateValue = () => {
  const ctx = useContext(StateContext);
  if (ctx === undefined) throw new Error("Outside of provider");
  return ctx;
}