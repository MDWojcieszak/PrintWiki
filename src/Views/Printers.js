import React, { useState, useEffect } from 'react';
import { GetData } from '../services/GetData';

const Printers = () => {
  const [page, setPage] = useState(()=>{return 1})
  const [count, setCount] =useState([])
  const [items, setItems] = useState([]);
  useEffect(()=>{
    GetData("/printers").then(data=>{
    setItems(data.printers)
    setCount(data.count)
  })
  },[page])
  return (
    <>
  <h1>Number of elements: {count}</h1>
  {items.map(item=>{
    return <h1>{item.name} {item.extruderNumber}</h1>
  })}
  </>
   );
};

export default Printers;
