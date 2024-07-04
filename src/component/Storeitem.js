import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatcCurrency from './formatcCurrency'
const Storeitem = ({id,price,name,imgUrl}) => {
  const quantity=1;
  return (
    <Card className='h-100'>
        <Card.Img src={imgUrl} variant='top' style={{height:"200px",objectFit:"cover"}}/>

        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-baseline'>
            <span className='fs-2' >{name}</span>
            <span className='text-muted me-2' >{formatcCurrency(price)}</span>

          </Card.Title>
          <div className='mt-auto'>
            {quantity===0?<Button className='w-100'>Add To Cart</Button>: 
            <div className='d-flex justify-content-between align-items-baseline'>
            <div>
              <Button className='mx-1'>-</Button>
              <span className='fs-5'>1 in cart</span>
              <Button className='mx-1'>+</Button>

            </div>
            <Button variant='danger' size='sm'>Remove</Button>  
              </div>}
          </div>
        </Card.Body>
    </Card>
  )
}

export default Storeitem
