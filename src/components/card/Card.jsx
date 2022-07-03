import React from 'react'
import "./Card.css"
import {languages} from "../../helpers/data";
import Item from "../item/Item"

const Card = () => {
  return (
    <div className='card-container'>
        <h1 className='card-title'>Language</h1>
        <div className='cards'>
        {languages.map((item,index)=>{

                return (
                    <Item  card={item}/>
                )

        })}
        </div>

    </div>
  )
}

export default Card