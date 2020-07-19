import React, {useState} from 'react';
import './App.css';
import ProductCard from "./components/ProductCard/ProductCard"
import CheckoutForm from "./components/CheckoutForm/CheckoutForm"
import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from "@stripe/stripe-js"
import keys from "./config/dev"

const stripePromise = loadStripe(keys.publishableKey)

stripePromise.then(data => {
  console.log(data)
})

function App() {

  const [products, setProducts] = useState([
    {
    img: "https://i.dlpng.com/static/png/6378027_preview.png",
    name: "Organic Apple",
    price: 70
    },
    {
      img: "https://pngriver.com/wp-content/uploads/2018/04/Download-Orange-Transparent.png",
      name: "Organic Orange",
      price: 90
    },
    {
      img: "https://lh3.googleusercontent.com/proxy/HxUZdB-OpmpT9T6o0ptrdHTu3x1A2rLf2PrZkeUEj1Yl1K191nBjTGP11esB02H20RfcxlpDcBTnVlciKw_W-eVje0OApjB6LOaKdg",
      name: "Organic Banana",
      price: 17
    }
  ])

  const [product, setProduct] = useState({
    name: "Organic Apple",
    price: 70
  })

  const displayProducts = () => {
    return products.map(product => {
      return (
        <ProductCard
          product={product}
          setProduct={setProduct}
        />
      )
    })
  }

  return (
    <Elements
      stripe={stripePromise}
    >
      <div className="App">
        <div className="product-cards">
          {displayProducts()}
        </div>
        <CheckoutForm
          product={product}
        />
      </div>
    </Elements>
  );
}

export default App;
