import { useNavigate } from "react-router-dom";

const Card = ({ id, image, title }) => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/Housesheet')	
	}

	return (
		<li key={id} onClick={handleClick}>
			<img src={image} alt={title} />
			<div></div>
			<p>{title}</p>
		</li>
	);
};

export default Card;
