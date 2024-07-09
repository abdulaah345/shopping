import React from 'react'
import{Offcanvas}from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import CartItems from './CartItems';
const ShoppingCart = () => {
    const{cartItems}=useShoppingCart();
  return (
   <Offcanvas show={true} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>  
        </Offcanvas.Header>
        <Offcanvas.Body>
            {cartItems.map((item)=>(
                <CartItems key={item.id}{...item}/>
            ))}
        </Offcanvas.Body>
   </Offcanvas>
  )
}

export default ShoppingCart
