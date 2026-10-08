import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function MainContext({ children }) {

  const [Cart, SetCart] = useState(JSON.parse(localStorage.getItem('CartItem')) || []);


  localStorage.setItem('CartItem', JSON.stringify(Cart));


  let obj = { Cart, SetCart };

  return (
    <CartContext.Provider value={obj}>
      {children}
    </CartContext.Provider>
  )
}
