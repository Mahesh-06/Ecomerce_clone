import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import style from "./pro.module.css"

const Orders = () => {
  let [state, setState] = useState([])
  let [count, setCount] = useState(1)
  let { id } = useParams()
  let inc = () => {
    setCount(count + 1)
  }
  let dec = () => {
    if (count <= 1) {
      setCount(count = 1)
    }
    else {
      setCount(count - 1)
    }
  }
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setState(res.data)
    }).catch(() => {
      console.log("loading....")
    })
  }, [id])
  return (
    <>
      <div id={style.ordercontent}>
        <div key={state.id} id={style.pro}>
          <h1>{state.title}</h1>
          <img src={state.image} alt="" />
          <h1>$.{state.price * count}</h1>
          <div id={style.total} >
            <div id={style.counter}>
              <button  className={style.value1} onClick={dec}>-</button>
              <h1 id={style.value}>{count}</h1>
              <button className={style.value2}  onClick={inc}>+</button>
            </div>
            <div id={style.links}>
              <Link className={style.lis1} to={`/cart/${state.id}`}>Back to cart</Link>
              <Link className={style.lis2} to={`/checkout/${state.id}`}>Go to order</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders
