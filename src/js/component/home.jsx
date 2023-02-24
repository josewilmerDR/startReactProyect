import React from "react";
import '../../../src/styles/index.css'; // Importar el archivo CSS

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
//import Narbar Component from navbar.jsx
import Navbar from "./narbar.jsx";
//import Jumbotrom Component from jumbotrom.jsx
import Jumbotrom from "./jumbotron.jsx";
//import Card Component from card.jsx
import Card from "./card.jsx";
//import Footer Component from footer.jsx
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<>	
			<Navbar/>	
			<div className="container">
				<Jumbotrom/>
				<div className="card-group">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
				</div>
			</div>
			<Footer/>
		</>
		// <div className="text-center">
		// 	<h1 className="text-center mt-5">Hello Rigo!</h1>
		// 	<p>
		// 		<img src={rigoImage} />
		// 	</p>
		// 	<a href="#" className="btn btn-success">
		// 		If you see this green button... bootstrap is working...
		// 	</a>
		// 	<p>
		// 		Made by{" "}
		// 		<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
		// 		love!
		// 	</p>
		// </div>
	);
};

export default Home;
