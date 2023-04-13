import React from 'react'

const Props = (props) => {
    return (
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Location : {props.location}</p>

            {props.children}
        </div>
    )
}

export default Props