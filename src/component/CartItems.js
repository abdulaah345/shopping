import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeitem from '../data/storeitem.json'
import formatcCurrency from './formatcCurrency'
import { useShoppingCart } from '../Context/ShoppingCartContext'
const CartItems = ({id,quantity}) => {
  const item=storeitem.find((i)=>i.id===id)
  const {removeitem}=useShoppingCart()

  if(item==null)return null;
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>

    <img src={item.imgUrl} alt='cart-img' style={{width:"125px", height:"75px" ,objectFit:"cover"}}/>

    <div className='me-auto'>
      <div>
        {item.name}{"  "}
        {quantity>1&&<span className='text-muted' style={{fontSize:"0.65rem"}}>x{quantity}</span>}
          
    <div className='text-muted'  style={{fontSize:"0.75rem"}}>

    {formatcCurrency(item.price)}
     </div>
      </div>
      
    </div>
    <div>  {formatcCurrency(item.price*quantity)}</div>
    <Button  variant="outline-danger" className='ms-auto'
        size="sm" onClick={()=>removeitem(id)}>
                 &times;
                 
    </Button>
    </Stack>
  )
}

export default CartItems
