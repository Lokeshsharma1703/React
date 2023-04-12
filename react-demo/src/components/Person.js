import React from 'react'
import './person.css'

const Person = () => {

    let luckyNumber = 7;
    let randomNumber = Math.floor(Math.random() * 10);

    return (
        <div className='person' style={{ color: 'green', fontWeight: 'bold' }}>
            {
                (randomNumber === luckyNumber) ?
                    <div>
                        <p>Name : ABC</p>
                        <p>Age : 26</p>
                        <p>Location : Delhi</p>

                        <p>My number is : {randomNumber}</p>
                    </div> : <p>You didn't win 🥲</p>
            }
        </div>
    )
}

export default Person
