import { useOutletContext } from "react-router-dom";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
const CountryList = () => {
	const [cities, loading] = useOutletContext();
	console.log(cities, "Loading cities from country");
	if (loading) return <Spinner />;
	return (
		<ul className={styles.countryList}>
			{cities?.map((city) => {
				return <CountryItem key={city.id} country={city} />;
			})}
		</ul>
	);
};
export default CountryList;
