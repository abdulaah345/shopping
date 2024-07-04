import React from 'react'
import {Row,Col} from 'react-bootstrap'
import storeitem from '../data/storeitem.json'
import Storeitem from './Storeitem'
const Store = () => {
  return (
      <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
          {storeitem.map((item)=>(
            <Col key={item.id}>
              <Storeitem {...item} />
            </Col>
          ))}

      </Row>
      </>
  )
}

export default Store
