import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Tags from "../components/Tags.jsx";
import Ratings from '../components/Ratings.jsx'
import data from "../assets/data.json";

const Housesheet = () => {
	const { houseId } = useParams();
	const result = data.find((element) => element.id === houseId);
	const tags = result.tags;

	return (
		<div className="housesheet">
			<Carousel />
			<div className="housesheet-info">
				<div className="housesheet-title">
					<h2 className="title">{result.title}</h2>
					<h3 className="subtitle">{result.location}</h3>
				</div>
				<div className="profil">
					<p className="profil-name">{result.host.name}</p>
					<img
						src={result.host.picture}
						alt="logo Kasa"
						className="profil-picture"
					/>
				</div>
			</div>
			<div className="tagsRatings">
				<div className="div-tags">
					{tags.map((tag) => (
						<Tags tagName={tag} />
					))}
				</div>
				<div className="div-ratings">
					<Ratings rate={result.rating}/>
				</div>
			</div>
		</div>
	);
};

export default Housesheet;
