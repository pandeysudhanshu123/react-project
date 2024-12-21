import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
const links = [
  {path:'/',title:'Home'},
  {path:'./About',title:'About'},
  {path:'./Contact',title:'Contact'},
  {path:'./Login',title:'Login'},
  {path:'./Products',title:'Products'}
]
   return (
    <div style={{display:'flex',justifyContent:'space-evenly',fontSize:'20px',textDecoration:'none'}}>
    {
      links.map((link)=>{
        return (
          <Link key={link.path} to={link.path}>{link.title}</Link>
        )
      })
    }
    </div>
  )
}

export default Navbar