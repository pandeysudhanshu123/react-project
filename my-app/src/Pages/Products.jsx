import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/AppContextProduct";
import { Link, Navigate, useSearchParams } from "react-router-dom";
const Products = () => {
  const value = useContext(userContext)
  const {isAuth} = value
  const [userData, setUserData] = useState([]);
  const [page,setPage]= useState(1)
  const [params,setParams] = useSearchParams()
  const [order,setOrder] = useState('asc')
  const [sort,setSort] = useState('price')
  const [filter,setFilter] = useState("")
  const getData = async (page) => {
    console.log(page,"dfghj")
    const res = await fetch(`http://localhost:8080/products?_Category=${filter}&_page=${page}&_limit=4&_sort=${sort}&_order=${order}`);
    const data = await res.json();
    return await data;
  };

  const resData = async()=>{
    const result  = await getData(page)
    setUserData(result)
  }
  useEffect(()=>{
   resData()
  },[page,order,filter])
 
useEffect(()=>{
setParams({page,order,filter}) 
},[page,order,filter])
  return (
  <div>
 <div style={{margin:'20px 20px', display:'flex',justifyContent:'space-around'}}>
 <button onClick={()=>setOrder('asc')}>Ascending by price</button>
 <button onClick={()=>setOrder('desc')}>Descending by price</button>
 <button onClick={()=>setFilter("electronics")}>Filter by Electronics</button>
 <button onClick={()=>setFilter("clothing")}>Filter by Clothing</button>
 <button onClick={()=>setFilter("jewellery")}>Filter by Jewellery</button>
 </div>
  <div style={{display:'grid', width:'90%',margin:'50px auto',gridTemplateColumns:'repeat(4,1fr)',gap:'10px'}}>
    {
     userData.map((items)=>{
      return(
        <div>
          <img src={items.image} alt="product-img"height={200} width={200}/>
          <p>{items.title}</p>
          <p>{items.price}</p>
          <Link to={`/products/${items.id}`}>More Details</Link>
        </div>
      )
     })
    }
   <div>
   <div>
      <button onClick={()=>setPage(page-1)} style={{padding:'10px'}} disabled={page===1}>Pre</button>
      {page}
      <button onClick={()=>setPage(page+1)} style={{padding:'10px'}}>Next</button>
    </div>
   </div>
    </div>
    </div>
  )
};

export default Products;
