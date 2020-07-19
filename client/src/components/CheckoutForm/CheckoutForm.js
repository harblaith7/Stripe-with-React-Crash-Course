import React, {useState} from 'react'
import "./CheckoutForm.css"
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import axios from 'axios'

function CheckoutForm(props) {

    const [isProcessing, setIsProcessing] = useState(false)
    const [checkoutErrorMsg, setCheckoutErrorMsg] = useState("")
    const [buttonMsg, setButtonMsg] = useState("Pay")

    const stripe = useStripe()
    const element = useElements()

    const handleChange = (e) => {
        if(e.error){
            return setCheckoutErrorMsg(e.error.message)
        }
        setCheckoutErrorMsg("")
    }

    const handlePayment = async (e) => {

        e.preventDefault()

        setIsProcessing(true)
        setButtonMsg("Processing...")

        const cardElement = element.getElement('card')

        const billingInfo = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            address: {
                line1: e.target.address.value
            }
        }

        try {
            // Got our client secret
            const paymentIntent = await axios.post("http://localhost:5000/payment", {
                amount: props.product.price * 100
            })

            // Create PaymentMethod Object
            const paymentMethodObj = await stripe.createPaymentMethod({
                type: "card",
                card: cardElement,
                billing_details: billingInfo
            })

            if(paymentMethodObj.error){
                setCheckoutErrorMsg(paymentMethodObj.error.message)
                setIsProcessing(false)
                setButtonMsg("Pay")
                return
            }
            
            // Confirm Payment Method
            const confirmPayment = await stripe.confirmCardPayment(paymentIntent.data, {
                payment_method: paymentMethodObj.paymentMethod.id
            })

            if(confirmPayment.error){
                setCheckoutErrorMsg(confirmPayment.error.message)
                setIsProcessing(false)
                setButtonMsg("Pay")
                return
            }

            setButtonMsg("Success! Payment is Complete")

            setTimeout(() => {
                setButtonMsg("Pay")
                setIsProcessing(false)
            }, 2000)
            
        } catch (error) {
            setCheckoutErrorMsg(error.message)
            setIsProcessing(false)
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
                    placeholder="Phone number"
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
                <p>
                    {checkoutErrorMsg}
                </p>
                <CardElement
                    options={{
                        hidePostalCode: true,
                        style: {
                            base: {
                                fontSize: '20px'
                            }
                        }
                    }}
                    onChange={handleChange}
                />
                <button type="submit" disabled={isProcessing}>
                    {buttonMsg}
                </button>
            </form>
        </div>
    )
}


export default CheckoutForm
