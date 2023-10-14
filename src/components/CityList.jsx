import { useOutletContext } from "react-router-dom";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import Spinner from "./Spinner";
const CityList = () => {
	const [cities, loading] = useOutletContext();
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
