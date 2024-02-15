import React, { useState } from 'react'
import style from "./pro.module.css"
const Checkout = () => {
  let [state, setState] = useState(false)


  let [userinput, setUserInput] = useState({
    name: "",
    email: "",
    mobile: ""
  });
  let status = () => {
    setState(!state)
  }
  let { name, email, mobile } = userinput;

  let submit = (e) => {
    e.preventDefault();
    console.log(userinput)
  }
  let change = (e) => {
    let { name, value } = e.target;
    setUserInput({ ...userinput, [name]: value })
  }

  return (
    <>
      <div id={style.formcontent}>
        <form action="" onSubmit={submit}>
          <input type="text" placeholder='Enter the username' onChange={change} name='name' value={name} required />
          <input type="email" placeholder='Enter the email' name='email' onChange={change} value={email} required />
          <input type="tel" placeholder='Enter the mobile number' onChange={change} value={mobile} name='mobile' required />
          <button className={state?style.placeorder:state.orderplaced} onClick={status}>{state ? "place placed" : "place order"}</button>
        </form>
        <div id={style.display}>
          <h3>{state ? name : ""}</h3>
          <h3>{state ? email : ""}</h3>
          <h3>{state ? mobile : ""}</h3>
        </div>
      </div>
    </>
  )
}

export default Checkout
