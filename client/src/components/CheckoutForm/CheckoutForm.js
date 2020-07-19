import React from 'react'
import "./CheckoutForm.css"

export default function CheckoutForm(props) {
    return (
        <div className="CheckoutForm">
            <h3 className="purchase-msg">
                You are purchasing an <span>{props.product.name}</span> for ${props.product.price}
            </h3>
            <form className="form">
                <input 
                    type="text" 
                    placeholder="Full name"
                    name="name"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Phone Number"
                    name="phone"
                    required
                />
                <input 
                    type="email" 
                    placeholder="Email"
                    name="email"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Address"
                    name="address"
                    required
                />
                <button type="submit">
                    Pay
                </button>
            </form>
        </div>
    )
}
