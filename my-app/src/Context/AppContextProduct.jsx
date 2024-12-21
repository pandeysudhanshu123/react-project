import React, { createContext, useState } from 'react'
export const userContext = createContext()
const AppContextProduct = ({children}) => {
const [isAuth,setIsAuth] = useState(false)

const toggelAuth = ()=>{
   setIsAuth(!isAuth) 
}
  return (
    <userContext.Provider value={{isAuth,toggelAuth}}>
     {children}
    </userContext.Provider>
  )
}

export default AppContextProduct