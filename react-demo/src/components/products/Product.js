import React, { useState } from 'react'
import './product.css'

const Product = (props) => {

    // let price = props.price

    // const [value, setValue] = useState(initial value) (({it returns array}))
    const [price, setPrice] = useState(props.price)

    const priceChangeHandler = () => {
        // price = 99

        setPrice(20 + price)
    }

    return (
        <div className='item'>
            <img src={props.img} alt='image' onClick={priceChangeHandler}></img>
            <h3>{props.name}</h3>
            <p>$ {price}</p>
        </div>
    )
}

export default Product
