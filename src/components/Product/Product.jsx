import React from 'react'
import "./Product.css"

const Product = ({name, price, description}) => {
  return (
  <div className='Product'>
    <div className='holder'><div className='title'> name: </div><div>{name}</div></div>
    <div>{description}</div>
    <div className="holder"><div className="title">price: </div><div>{price}$</div></div>
  </div>
  )
}

export default Product