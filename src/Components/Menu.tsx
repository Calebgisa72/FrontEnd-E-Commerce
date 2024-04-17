import React from "react";
import './menu.css';
import closeIcon from '../assets/images/icon-close.svg'

interface menuProps{
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({isMenuOpen, setIsMenuOpen}: menuProps) => {
    const links = ['Collections', 'Men', 'Women', 'About', 'Contact'];
  return (
    <div className={isMenuOpen? 'backG': 'notDsiplayed'}>
      <div className={isMenuOpen? 'menu': 'notDsiplayed'} >
       <button onClick={() => setIsMenuOpen(false)} className="close"><img src={closeIcon} alt="" /> </button>
      {links.map((link, index) => (
        <div key={index} className="menu-link">
          {link}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Menu;
