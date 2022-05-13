import React from "react";
import Shopcards from "./Shopcards";
import plush1 from '../images/plush1.jpg'
import plush2 from '../images/plush2.jpg'
import plush3 from '../images/plush3.jpg'
import plush4 from '../images/plush4.jpg'
import plush5 from '../images/plush5.jpg'
import plush6 from '../images/plush6.jpg'
import plush7 from '../images/plush7.jpg'
import plush8 from '../images/plush8.jpg'
import plush9 from '../images/plush9.jpg'
import '../styles/shop.css'

function Shop (props) {
    const {addItem} = props;
    return (
        <section className="shop">
            <h1>Store</h1>
            <div className="item-container">
                <Shopcards itemName='Buggy Plush' itemPrice='1.00' addItem={addItem} itemPic={plush1} />
                <Shopcards itemName='Shanks Plush' itemPrice='2.40' addItem={addItem} itemPic={plush2}/>
                <Shopcards itemName='Luffy Plush' itemPrice='3.70' addItem={addItem} itemPic={plush3}/>
                <Shopcards itemName='Franky Plush' itemPrice='4.50' addItem={addItem} itemPic={plush4}/>
                <Shopcards itemName='Zoro Plush' itemPrice='4.50' addItem={addItem} itemPic={plush5}/>
                <Shopcards itemName='Usopp Plush' itemPrice='4.50' addItem={addItem} itemPic={plush6}/>
                <Shopcards itemName='Nami Plush' itemPrice='4.50' addItem={addItem} itemPic={plush7}/>
                <Shopcards itemName='Smoker Plush' itemPrice='4.50' addItem={addItem} itemPic={plush8}/>
                <Shopcards itemName='Jinbei Plush' itemPrice='4.50' addItem={addItem} itemPic={plush9}/>
            </div>

        </section>
    )
}

export default Shop;