import React from 'react';
import './Icard.css';

interface ICardProps {
    img: string;
    setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
    selectedImage: string;
}

function Icard({ img, setSelectedImage,selectedImage }: ICardProps) {

    function handleClicked() {
        setSelectedImage(img);
    }

    return (
        <img onClick={handleClicked} className= {selectedImage === img ? 'imgg imSize selected':'imgg imSize'} src={img} alt="Image" />
    );
}

export default Icard;
