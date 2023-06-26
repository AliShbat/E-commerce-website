import React, { useEffect, useState } from 'react'
import { Banner, Products } from '../components'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const [products , setProducts] = useState([])
  const data =useLoaderData()
  useEffect(()=>{
    setProducts(data.data)
  },[data])
  return (
    <div>
      <Banner/>
      <Products products={products} />
    </div>
  )
}

export default Home