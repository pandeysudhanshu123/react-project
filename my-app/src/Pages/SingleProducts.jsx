import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProducts = () => {
  const value = useParams()
  const {Products_id} = value
  const [data,setdata] = useState({})
  const getData = async()=>{
  const res = await fetch(`http://localhost:8080/products/${Products_id}`)
  const data = await res.json()
  return await data
  }
  const resdata = async()=>{
  const result = await getData()
  setdata(result)
  }
  useEffect(()=>{
    resdata() 
  },[])
  console.log(data)
  return (
    <div style={{height:'auto',width:'400px',border:'2px solid black', margin:'20px auto',wordSpacing:'2px',textAlign:'center'}}>
      <img src={data.image} alt="" height={300} width={300}/>
      <p>{data.category}</p>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <p>price:{data.price}</p>
    </div>
  )
}

export default SingleProducts