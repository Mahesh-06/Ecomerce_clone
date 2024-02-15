import React from 'react'
import style from "./pro.module.css"
import { NavLink } from 'react-router-dom'
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
    return (
        <>
            <div className={style.nav}>
                <article className={style.logo}><FaShoppingBag /></article>
                <article className={style.items}>
                    <NavLink className={style.navlink} to="/">Products</NavLink>
                    <NavLink className={style.navlink} to="/cart">Cart</NavLink>
                    <NavLink className={style.navlink} to="/order">Orders</NavLink>
                    <NavLink className={style.navlink} to="/checkout">Checkout</NavLink>
                </article>
            </div>
        </>
    )
}

export default NavBar
