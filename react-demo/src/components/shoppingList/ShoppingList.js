import React, { useState } from 'react'
import Product from '../products/Product'
import Form from '../form/Form'
import './shoppingList.css'

const ShoppingList = () => {


    const initialProducts = [
        {
            name: "Car",
            price: 250,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrIAZ3e7yzxaCR4fpQhna8M1Xe43E1ELEn2v8VVn1&s"
        },
        {
            name: "Laptop",
            price: 100,
            img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVsbCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80"
        },
        {
            name: "Watch",
            price: 20,
            img: "https://st.depositphotos.com/2288675/2450/i/600/depositphotos_24503275-stock-photo-gold-pocket-watch-and-hourglass.jpg"
        },
    ]



    const [products, setProducts] = useState(initialProducts);

    const addProduct = (product) => {
        return setProducts([...initialProducts, product])
    }




    return (
        <div className='items'>

            {
                products.map((product) => {
                    return <Product name={product.name} price={product.price} img={product.img} />
                })
            }
            <Form addProduct={addProduct} />
        </div>
    )
}

export default ShoppingList
