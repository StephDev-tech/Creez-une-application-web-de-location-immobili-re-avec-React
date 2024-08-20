import Banner from "../components/Banner.jsx";
import Card from "../components/Card.jsx";
import data from "../assets/data.json";
import imageBanner from "../assets/banner_home.jpg"

const Home = () => {
	return (
		<div className="home">
			<Banner title={'Chez vous, partout et ailleurs'} backgroundImage={imageBanner} alt={'Un litoral'}/>
			<ul className="gallery">
				{data.map((logement) => (
				 <Card id={logement.id} image={logement.cover} title={logement.title} />
				))}
			</ul>
		</div>
	);
};

export default Home;
