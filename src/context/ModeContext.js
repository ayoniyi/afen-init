import { createContext, useEffect, useState } from 'react'

const INITIAL_STATE = {
  dark: localStorage.getItem('mode') || 'false',
}

export const ModeContext = createContext(INITIAL_STATE)

export const ModeContextProvider = ({ children }) => {
  const [modeState, setModeState] = useState(INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('mode', modeState.dark)
  }, [modeState.dark])

  return (
    <ModeContext.Provider value={[modeState, setModeState]}>
      {children}
    </ModeContext.Provider>
  )
}
