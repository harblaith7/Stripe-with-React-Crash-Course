import React, {useState} from 'react'
import "./CheckoutForm.css"
import {CardElement} from "@stripe/react-stripe-js"

export default function CheckoutForm(props) {

    const [isProcessing, setIsProcessing] = useState(false)

    const handlePayment = (e) => {

        e.preventDefault()

        setIsProcessing(true)

        const billingInfo = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            address: {
                line1: e.target.address.value
            }
        }

    }

    return (
        <div className="CheckoutForm">
            <h3 className="purchase-msg">
                You are purchasing an <span>{props.product.name}</span> for ${props.product.price}
            </h3>
            <form className="form" onSubmit={handlePayment}>
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
                <CardElement
                    options={{
                        hidePostalCode: true,
                        style: {
                            base: {
                                fontSize: '20px'
                            }
                        }
                    }} 
                />
                <button type="submit" disabled={isProcessing}>
                    {!isProcessing ? "Pay" : "Processing..."}
                </button>
            </form>
        </div>
    )
}
