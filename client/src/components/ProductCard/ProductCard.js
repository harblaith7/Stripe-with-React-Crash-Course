import React from 'react'
import "./ProductCard.css"

export default function ProductCard(props) {

    const setProduct = () => {
        props.setProduct({
            name: props.name,
            price: props.price
        })
    }

    return (
        <div className="ProductCard" onClick={setProduct}>
            <img src={props.img} className="card-image"/>
            <h3 className="card-name">{props.name}</h3>
            <p className="card-price">${props.price}</p>
        </div>
    )
}
