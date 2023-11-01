import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
const CityList = () => {
	const { cities, loading } = useContext(CitiesContext);
	if (loading) return <Spinner />;
	return (
		<ul className={styles.cityList}>
			{cities?.map((city) => {
				return <CityItem key={city.id} city={city} />;
			})}
		</ul>
	);
};
export default CityList;
