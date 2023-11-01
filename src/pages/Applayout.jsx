import { useEffect, useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./Applayout.module.css";
import CitiesProvider from "../context/CitiesContext";
const Applayout = () => {
	// console.log(cities, "cities");
	return (
		<CitiesProvider>
			<div className={styles.app}>
				<Sidebar />
				<Map />
			</div>
		</CitiesProvider>
	);
};
export default Applayout;
