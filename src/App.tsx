import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Icard from "./Components/Icard";
import Card from "./Components/Card";
import Details from "./Components/Details";
import Discount from "./Components/Discount";
import Buybut from "./Components/Buybut";

import image1 from "./assets/images/image-product-1.jpg";
import image2 from "./assets/images/image-product-2.jpg";
import image3 from "./assets/images/image-product-3.jpg";
import image4 from "./assets/images/image-product-4.jpg";

interface details {
  company: string;
  title: string;
  description: string;
  price: number;
  from: number;
  quantity: number;
}

function App() {
  const allImages = [image1, image2, image3, image4];
  const [quantity, setQuantity] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string>(allImages[0]);
  const [inCart, setInCart] = useState<details[]>([]);

  return (
    <div className="App">
      <div className="headerr">
        <Header image={allImages[0]} inCart={inCart} setInCart={setInCart} />
      </div>
      <div className="bodyContent">
        <div className="left">
          <div>
            <Card image={selectedImage} />
          </div>
          <div className="small">
            {allImages.map((image, index) => (
              <Icard
                key={index}
                img={image}
                setSelectedImage={setSelectedImage}
                selectedImage={selectedImage}
              />
            ))}
          </div>
        </div>
        <div className="right">
          <Details
            company="SNEAKERS COMPANY"
            title="Fall Limited Edition Sneakers"
            description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          />
          <Discount price={125} from={250} />
          <Buybut
            quantity={quantity}
            setQuantity={setQuantity}
            inCart={inCart}
            setInCart={setInCart}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
