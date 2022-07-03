import React from 'react'
import "./Item.css";

const Item = ({card}) => {
    const {name, img, options} = card;
  return (
    <div className='item-container'>
        <img className='item-img' src={img} alt="" />
        <h3 className='item-title'>{name}</h3>
    </div>
  )
}

export default Item