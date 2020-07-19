import React from 'react'
import "./ProductCard.css"

export default function ProductCard(props) {
    return (
        <div className="ProductCard">
            <img src={props.img} className="card-image"/>
            <h3 className="card-name">{props.name}</h3>
            <p className="card-price">${props.price}</p>
        </div>
    )
}
