import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatcCurrency from './formatcCurrency'
import { useShoppingCart } from '../Context/ShoppingCartContext'
const Storeitem = ({id,price,name,imgUrl}) => {
  const {getitemquantity,increasecartquantity,decreasecartquantity,removeitem}=useShoppingCart()
  const quantity=getitemquantity(id);
  return (
    <Card className='h-100'>
        <Card.Img src={imgUrl} variant='top' style={{height:"200px",objectFit:"cover"}}/>

        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-baseline'>
            <span className='fs-2' >{name}</span>
            <span className='text-muted me-2' >{formatcCurrency(price)}</span>

          </Card.Title>
          <div className='mt-auto'>
            {quantity===0?<Button className='w-100' onClick={()=>increasecartquantity(id)}>Add To Cart</Button>: 
            <div className='d-flex justify-content-between align-items-baseline'>
            <div>
              <Button className='mx-1' onClick={()=>decreasecartquantity(id)}>-</Button>
              <span className='fs-5'>{quantity} in cart</span>
              <Button className='mx-1'onClick={()=>increasecartquantity(id)}>+</Button>

            </div>
            <Button variant='danger' size='sm'onClick={()=>removeitem(id)}>Remove</Button>  
              </div>}
          </div>
        </Card.Body>
    </Card>
  )
}

export default Storeitem
