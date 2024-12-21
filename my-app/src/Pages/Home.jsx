import React, { useContext } from 'react'
import { userContext } from '../Context/AppContextProduct'
import { Navigate } from 'react-router-dom'
const Home = () => {
const value = useContext(userContext)
const {isAuth,toggelAuth} = value
if(!isAuth){
  return <Navigate to={'/Login'}/>
}
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={toggelAuth}>LOGOUT</button>
    </div>
  )
}

export default Home