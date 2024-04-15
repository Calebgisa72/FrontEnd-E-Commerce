import React from "react";
import "./cart.css";
import deleteImg from "../assets/images/icon-delete.svg";

interface details {
  company: string;
  title: string;
  description: string;
  price: number;
  from: number;
  quantity: number;
}

interface cartProps {
  img: string;
  inCart: details[];
  isCartOpen:boolean;
  setInCart: React.Dispatch<React.SetStateAction<details[]>>;
}

function totalPrice(price: number, quantity: number) {
  return price * quantity;
}

function Cart({ img, isCartOpen, inCart, setInCart }: cartProps) {
  let cartContent;
  if (inCart.length === 0) {
    cartContent = <div className="empty">Your cart is empty.</div>;
  } else {
    cartContent = inCart.map((item, index) => (
      <div className="cartItems">
        <div className="itemDetail">
          <img className="img" src={img} alt="" />
          <div className="details">
            <div className="titlle">{item.title}</div>
            <div className="total">
              ${item.price} * {item.quantity}{" "}
              <div className="cost">
                {totalPrice(item.price, item.quantity)}
              </div>
            </div>
          </div>
          <div className="delete">
            <img
              className="deleteBut"
              onClick={() => removeFromCart(index)}
              src={deleteImg}
              alt=""
            />
          </div>
        </div>
      </div>
    ));
  }

  function removeFromCart(index: number) {
    const updatedCart = [...inCart];
    updatedCart.splice(index, 1);
    setInCart(updatedCart);
  }

  return (
    <div className={isCartOpen ? "cartt":"notOpen"}>
      <div className="Title">Cart</div>
      <div className="all">{cartContent}</div>
      <button
        className= {inCart.length === 0 ? "noItems": "checkoutBut"}>
          <div>Checkout</div>
      </button>
    </div>
  );
}

export default Cart;