import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, {useState} from 'react';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Header from './components/Header';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [itemsInCart, setItemsInCart] = useState(0)

  // Adding items to Cart
  const addItem = (itemName,itemPrice, itemImg) => {
    let item = {name: itemName, price: itemPrice, image: itemImg, qty: 1}
    let checkItem = false;
    for(let i= 0 ; i < cartItems.length; i++ ){
      if(cartItems[i].name === itemName){
        cartItems[i].qty += 1;
        checkItem = true;
        break;
      } 
    }
    if (!checkItem) {
      setCartItems([...cartItems, item])
    }
    setCartTotal(cartTotal + parseFloat(itemPrice) );
    setItemsInCart(itemsInCart + 1 );
  }

  // Add more items in Cart
  const updateAdd = (itemName) => {
    for(let i = 0 ; i < cartItems.length; i++ ){
      if(cartItems[i].name === itemName){
        cartItems[i].qty += 1;
        setItemsInCart(itemsInCart + 1 );
        setCartTotal(cartTotal + parseFloat(cartItems[i].price));
        break;
      } 
    }
  }
  // Delete Items in Cart
  const updateDelete = (itemName) => {
    for(let i= 0 ; i < cartItems.length; i++ ){
      if(cartItems[i].name === itemName){
        if (cartItems[i].qty > 1 ) {
          setCartTotal(cartTotal - parseFloat(cartItems[i].price));
          setItemsInCart(itemsInCart - 1 );
          cartItems[i].qty -= 1;
        }
          if(cartItems[i].qty === 0) {
            let updateArray = cartItems
            updateArray.splice(i, 1);
            setCartItems(updateArray);
          }
        break;
      } 
    }
  }

  const removeItem = (itemName) => {
    for(let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].name === itemName) {
        setCartTotal(cartTotal - parseFloat(cartItems[i].price * cartItems[i].qty));
        setItemsInCart(itemsInCart - cartItems[i].qty );
        let updateArray = cartItems
        updateArray.splice(i, 1);
        setCartItems(updateArray);
      }
    }
  }

  return (
    <BrowserRouter>
      <Header cartItemTotal={itemsInCart}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop addItem={addItem} />}/>
        <Route path='/cart' element={<Cart cartTotal={cartTotal} cartItems={cartItems} updateAdd={updateAdd} updateDelete={updateDelete} removeItem={removeItem} itemsInCart={itemsInCart} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
