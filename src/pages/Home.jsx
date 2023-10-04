import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

const Home = () => {
	return (
		<main className={styles.homepage}>
			<Navbar />
			<section>
				<h1>
					You travel the world.
					<br />
					WorldWise keeps track of your adventures.
				</h1>
				<h2>
					A world map that tracks your footsteps into every city you can think
					of. Never forget your wonderful experiences, and show your friends how
					you have wandered the world.
				</h2>
				<a className="cta" to="/app">
					Start tracking now
				</a>
			</section>
		</main>
	);
};
export default Home;
