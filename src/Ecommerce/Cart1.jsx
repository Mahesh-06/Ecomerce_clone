import React, { useState, useEffect } from 'react'
// import  { useEffect, useState } from 'react-dom'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import style from "./pro.module.css"

const Cart1 = () => {
  let [state, setState] = useState()
  let { id } = useParams()

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setState(res.data)
    }).catch(() => {
      console.log("loading...")
    })
  }, [id])
  return (
    <>
      <div id={style.cartcontent}>
        {(state == null) ? "nothing" : (<div key={state.id} id={style.pro}>
          <h1>{state.title}</h1>
          <img src={state.image} alt="" />
          <h1>$.{state.price}</h1>
          <div id={style.links}>
            <Link className={style.lis} to="/">Go to product</Link>
            <Link className={style.lis} to={`/order/${state.id}`}>Go to orders</Link>
          </div>
        </div>)}
      </div>
    </>
  )
}

export default Cart1
