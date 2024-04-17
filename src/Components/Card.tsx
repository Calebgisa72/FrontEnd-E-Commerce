import React from 'react';
import './Icard.css';

interface CardProps {
    image: string;
}

function Card({ image }: CardProps) {
    return (
        <div>
            <img className='imgg imggg large' src={image} alt="" />
        </div>
    )
}

export default Card;
