import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/data.json";

const Carousel = () => {
    const { houseId } = useParams();
	const [currentIndex, setCurrentIndex] = useState(0);
	const result = data.find((element) => element.id === houseId);
	const pictures = result.pictures;
	const usefull = pictures.length > 1;
	

	const prevPicture = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextPicture = () => {
		const isLastSlide = currentIndex === pictures.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<div className="carousel">
			{usefull ? (<i className="fa-solid fa-chevron-left" onClick={prevPicture}></i>) : (	"")}
			<img className="carousel-picture" src={pictures[currentIndex]} alt={result.title}/>
			{usefull ? (<i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>	) : (""	)}
			{usefull ? (<p className="pic-number"> {currentIndex+1}/{pictures.length}</p>	) : (""	)}			
		</div>
	);
};

export default Carousel;
