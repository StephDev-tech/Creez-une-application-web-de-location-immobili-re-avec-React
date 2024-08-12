
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<div className="App">
			<Router>
        		<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
