import React, { Component } from 'react'
import "./ProductCard.css"

class ProductCard extends Component {
    render() {
        return (
            <div className="ProductCard">
                <img src={this.props.img} className="card-image"/>
                <h3 className="card-name">{this.props.name}</h3>
                <p className="card-price">${this.props.price}</p>
            </div>
        )
    }
}

export default ProductCard
