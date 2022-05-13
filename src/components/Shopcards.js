import React from "react";

function Shopcards (props) {
    let {itemName, itemPrice, itemPic, addItem} = props
    return (
        <div className="item-card">
            <img src={itemPic} alt="item 1 pic" width='225px' height='225px'/>
            <div className="item-card-info">
                <p className="item-card-name">{itemName}</p>
                <p className="item-card-price">${itemPrice}</p>
                {/* <input type='number'></input> */}
                <button className="item-card-btn" onClick={() => addItem(itemName,itemPrice, itemPic)}>Add</button>
            </div>

        </div>
    )
}

export default Shopcards;