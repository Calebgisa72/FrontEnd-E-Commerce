import React, { useState } from "react";
import avatar from '../assets/images/image-avatar.png';
import cartIcon from '../assets/images/icon-cart.svg';
import './header.css';
import Cart from './Cart';
import Menu from "./Menu";
import humbergerIcon from '../assets/images/icon-menu.svg' 

interface details {
  company: string;
  title: string;
  description: string;
  price: number;
  from: number;
  quantity: number;
}

interface headerProps {
    image: string;
    inCart: details[];
    setInCart: React.Dispatch<React.SetStateAction<details[]>>;
}

function Header({ inCart, image, setInCart }: headerProps) {
  const [isCartOpen,setIsCartOpen]= useState(false);
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const setCart= (isCartOpen: boolean) => {
    if(isCartOpen === false){
      setIsCartOpen(true);
    }
    else{
      setIsCartOpen(false);
    }
  } 
    const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];
    return (
        <div className='headerDiv'>
          <div className="ff">
            <img onClick={() => setIsMenuOpen(true)} src={humbergerIcon} className="humberger" alt="" />
            <h1 className="h11">sneakers</h1>
          </div>
          <div>
          <Menu isMenuOpen = {isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
          </div>
            <div className='headerLinks'>
                {links.map((link, index) => <a key={index} href="#" className='aLink'>{link}</a>)}
            </div>
            <div className='imagesDiv'>
                <div className='cartDiv'>
                <img onClick={() => setCart(isCartOpen)} className='cartIcon' src={cartIcon} alt="Cart" />
                    <div className='cart'>
                        <Cart img={image} isCartOpen={isCartOpen} inCart={inCart} setInCart={setInCart} />
                    </div>
                </div>
                <img className='profilePic' src={avatar} alt="Avatar" />
            </div>
        </div>
    );
}

export default Header;