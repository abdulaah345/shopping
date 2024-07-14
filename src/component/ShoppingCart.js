import React from 'react'
import{Offcanvas, Stack}from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContext'
import CartItems from './CartItems';
import formatcCurrency from './formatcCurrency';
import storeitem from '../data/storeitem.json'
const ShoppingCart = ({isOpen}) => {
    const{cartItems,Closecart}=useShoppingCart();
  return (
   <Offcanvas show={isOpen} onHide={Closecart} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>  
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
          {cartItems.map((item)=>(
                <CartItems key={item.id}{...item}/>
            ))}
           <div className='ms-auto fw-bold fs-5'> 
            Total{" "}
            {formatcCurrency(

              cartItems.reduce((total,cartItem)=>{
                const item=storeitem.find((i)=>i.id===cartItem.id)
                return total+(item?.price||0)*cartItem.quantity
              }, 0)
            )}</div>
          </Stack>
        </Offcanvas.Body>
   </Offcanvas>
  )
}

export default ShoppingCart
