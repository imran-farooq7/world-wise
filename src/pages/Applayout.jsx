import { useEffect, useState } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./Applayout.module.css";
import CitiesProvider from "../context/CitiesContext";
import User from "../components/User";
const Applayout = () => {
	// console.log(cities, "cities");
	return (
		<CitiesProvider>
			<div className={styles.app}>
				<Sidebar />
				<Map />
				<User />
			</div>
		</CitiesProvider>
	);
};
export default Applayout;
