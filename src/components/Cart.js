import React from "react";

function Cart (props) {
    const {cartTotal, cartItems, updateAdd, updateDelete, removeItem, itemsInCart} = props
    return(
        <section className="cart">
            <div id="cart-items">
                {cartItems.map(function(item, i ) {
                    return (
                        <div className="item-card" key={i}>
                            <img src={item.image} alt="item 1 pic" width='225px' height='225px'/>
                            <div className="item-card-info">
                                <p className="item-card-name">{item.name}</p>
                                <p className="item-card-price">${(item.price * item.qty).toFixed(2)}</p>
                                <div className="cart-btn-info">
                                    <button className="cart-btn" onClick={() => updateAdd(item.name)}>+</button>
                                    <p className="item-card-qty"> {item.qty}</p>
                                    <button className="cart-btn" onClick={() => updateDelete(item.name)}>-</button>
                                </div>
                                <a href="#" onClick={() => removeItem(item.name)}>Remove</a>
                            </div>
                        </div>
                    )         

                })}
            </div>
            <div className="cart-totals">
                <h1>Cart</h1>
                <table className="cart-totals-info">
                    <tr>
                        <td>Total Items: </td>
                        <td className="cart-total-bold">{itemsInCart}</td>
                    </tr>
                    <tr>
                        <td>Total: </td>
                        <td className="cart-total-bold">${cartTotal.toFixed(2)}</td>
                    </tr>
                </table>
                <button className="cart-btn-checkout">Check Out</button>
            </div>

        </section>
    )
}

export default Cart;