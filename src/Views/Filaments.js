import React, { useState, useEffect } from 'react';
import { GetData } from '../services/GetData';


const Filaments = () => {
  const [page, setPage] = useState(()=>{return 1})
  const [count, setCount] =useState([])
  const [items, setItems] = useState([]);
  useEffect(()=>{
    GetData("/filaments").then(data=>{
    setItems(data.filaments)
    setCount(data.count)
  })
  },[page])
  return (
    <>
  <h1>Number of elements: {count}</h1>
  {items.map(item=>{
    return <h1>{item.brand} {item.colour}</h1>
  })}
  </>
   );
}
 
export default Filaments;