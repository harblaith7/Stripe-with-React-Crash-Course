import React, {useState} from 'react';
import './App.css';
import ProductCard from "./components/ProductCard/ProductCard"
import CheckoutForm from "./components/CheckoutForm/CheckoutForm"

function App() {

  const [products, setProducts] = useState([
    {
      img: "https://i.dlpng.com/static/png/6378027_preview.png",
      name: "Organic Apple",
      price: 70
    },
    {
      img: "https://pngriver.com/wp-content/uploads/2018/04/Download-Orange-Transparent.png",
      name: "Organic Organic",
      price: 90
    },
    {
      img: "https://lh3.googleusercontent.com/proxy/HxUZdB-OpmpT9T6o0ptrdHTu3x1A2rLf2PrZkeUEj1Yl1K191nBjTGP11esB02H20RfcxlpDcBTnVlciKw_W-eVje0OApjB6LOaKdg",
      name: "Organic Banana",
      price: 17
    }
  ])

  const displayProducts = () => {
    return products.map(product => {
      return (
        <ProductCard
          img={product.img}
          name={product.name}
          price={product.price}
        />
      )
    })
  }

  return (
    <div className="App">
      <div className="product-cards">
        {displayProducts()}
      </div>
      <CheckoutForm/>
    </div>
  );
}

export default App;
