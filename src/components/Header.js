import React from "react";
import { Link } from "react-router-dom";
import '../styles/header.css'


function Header(props) {
    const {cartItemTotal} = props
    return (
        <header>
            <h1>OP Plush Store</h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop</Link>
                </li>
                <li>
                    

                    <Link to='/cart'>                    
                        <i class="fa" >&#xf07a;</i>
                        <span class='badge badge-warning' id='lblCartCount'> {cartItemTotal} </span> 
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;