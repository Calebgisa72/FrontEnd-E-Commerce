// Buybut.tsx
import React, { useState } from "react";
import cartIcon from "../assets/images/icon-cart.svg";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import Toast from "../Components/Toast";
import "./buybut.css";

interface details {
  company: string;
  title: string;
  description: string;
  price: number;
  from: number;
  quantity: number;
}

interface butProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  inCart: details[];
  setInCart: React.Dispatch<React.SetStateAction<details[]>>;
}

function Buybut({ quantity, setQuantity, inCart, setInCart }: butProps) {
  const [visible, setVisible] = useState(false);

  function handlePlus() {
    setQuantity(quantity + 1);
  }

  function handleMinus() {
    if (quantity === 0) {
      alert("Quantity can't go below 0");
      return;
    }
    setQuantity(quantity - 1);
  }

  function onClick() {
    if (quantity === 0) {
      return;
    } else {
      setInCart((prevInCart) => [
        ...prevInCart,
        {
          company: "SNEAKERS COMPANY",
          title: "Fall Limited Edition Sneakers",
          description:
            "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
          price: 125,
          from: 250,
          quantity: quantity,
        },
      ]);
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }

  return (
    <div className="buyBut">
      <div className="quantityButs">
        <button className="operator" onClick={handleMinus}>
          <img src={minus} alt="" />
        </button>
        <div className="num">{quantity}</div>
        <button className="operator" onClick={handlePlus}>
          <img src={plus} alt="" />
        </button>
      </div>
      <button
        onClick={onClick}
        className={quantity === 0 ? "addToCartBut not" : "addToCartBut"}
      >
        <img src={cartIcon} alt="" /> <div>Add to cart</div>
      </button>
      <Toast message="Added to cart" show={visible} />
    </div>
  );
}

export default Buybut;
