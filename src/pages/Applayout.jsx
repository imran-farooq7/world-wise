import { useEffect, useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./Applayout.module.css";
const Applayout = () => {
	const [cities, setCities] = useState();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const getcities = async () => {
			setLoading(true);
			const res = await fetch("http://localhost:3000/cities");
			const data = await res.json();
			setCities(data);
			setLoading(false);
		};
		getcities();
	}, []);
	console.log(cities, "cities");
	return (
		<div className={styles.app}>
			<Sidebar cities={cities} loading={loading} />
			<Map />
		</div>
	);
};
export default Applayout;
