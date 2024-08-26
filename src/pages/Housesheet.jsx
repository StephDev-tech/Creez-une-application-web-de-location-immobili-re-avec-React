import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Tags from "../components/Tags.jsx";
import Ratings from "../components/Ratings.jsx";
import data from "../assets/data.json";
import Accordion from "../components/Accordion.jsx";

const Housesheet = () => {
	const { houseId } = useParams();
	const result = data.find((element) => element.id === houseId);
	const tags = result.tags;
	const equipements = result.equipments

	return (
		<div className="housesheet">
			<Carousel />
			<div className="housesheet-info">
				<div>
					<div className="housesheet-title">
						<h2 className="title">{result.title}</h2>
						<h3 className="subtitle">{result.location}</h3>
					</div>
					<div className="div-tags">
					{tags.map((tag, index) => (
						<Tags tagName={tag} key={`housheet-${tag + index}`}/>
						
					))}
					</div>
				</div>
				<div className="housesheet-right">
					<div className="profil">
						<p className="profil-name">{result.host.name}</p>
						<img
							src={result.host.picture}
							alt="logo Kasa"
							className="profil-picture"
						/>
					</div>
					<div className="div-ratings">
						<Ratings rate={result.rating} />
					</div>
				</div>
			</div>
			<div className="div-accordion">
				<div className="accordion-hs">
					<Accordion title="Description" content={result.description} />
				</div>
				<div className="accordion-hs">
					<Accordion title="Equipements" content={equipements.map((equipement, index) => (<li key={`housesheet-${equipement+index}`} className="equipment">{equipement}</li>))}/>
				</div>
			</div>
		</div>
	);
};

export default Housesheet;
