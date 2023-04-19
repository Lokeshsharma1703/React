import React, { useState } from 'react'
import './form.css'
import Product from '../products/Product';

const Form = (props) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("");


    const formEventHandler = (event) => {
        event.preventDefault();
        console.log(name + " " + price + " " + img);


        props.addProduct({ name, price, img });
        setName('');
        setPrice('');
        setImg('');

    }

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const priceChangeHandler = (e) => {
        setPrice(e.target.value)
    }

    const urlChageHandler = (e) => {
        setImg(e.target.value)
    }



    return (
        <form onSubmit={formEventHandler}>
            <div className='box'>
                <label htmlFor='name'>Product Name</label>
                <input onChange={nameChangeHandler} type='text' value={name} id='name' placeholder='name'></input>
            </div>
            <div className='box'>
                <label htmlFor='price'>Price</label>
                <input onChange={priceChangeHandler} type='number' value={price} id='price' placeholder='price'></input>
            </div>
            <div className='box'>
                <label htmlFor='image'>Image URL</label>
                <input onChange={urlChageHandler} type='text' value={img} id='image' placeholder='image url'></input>
            </div>
            <button className='butt' type='submit'>Add Product</button>
        </form>
    )
}

export default Form
