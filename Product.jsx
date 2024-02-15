import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import style from "./pro.module.css"

const Product = () => {
  let [state, setState] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((res) => {
      setState(res.data)
    }).catch(() => {
      console.log("loading....")
    })
  }, [])
  return (
    <>
      <div id={style.content}>
        {state.map((data) => {
          return <div key={data.id} id={style.pro}>
            <h1>{data.title}</h1>
            <h1> {data.category}</h1>
            <img src={data.image} alt="" />
            <h1 id={style.price}>$.{data.price}</h1>
            <Link to={`/cart/${data.id}`} className={style.li}>Add to cart</Link>
            {/* <hr /> */}

          </div>

        })}
      </div>
    </>
  )
}

export default Product
