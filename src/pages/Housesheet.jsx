import image from "../assets/logo_kasa.svg";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import data from "../assets/data.json";

const Housesheet = () => {
	const { houseId } = useParams();
	const result = data.find((element) => element.id === houseId);

	return (
		<div className="housesheet">
            <Carousel />
			<div className="housesheet-info">
				<div className="housesheet-title">
					<h2 className="title">{result.title}</h2>
					<h3 className="subtitle">{result.location}</h3>
				</div>
				<div>
					<p className="profil-name">Nom du profil</p>
					<img src={image} alt="logo Kasa" className="profil-picture" />
				</div>
			</div>
		</div>
	);
};

export default Housesheet;
