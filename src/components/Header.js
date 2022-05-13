import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'


function Header(props) {
    const {cartItemTotal} = props
    return (
        <header>
            <p>OP Plush</p>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart: {cartItemTotal}</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;