import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
const CityItem = ({ city }) => {
	return (
		<li>
			<Link
				to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
				className={styles.cityItem}
			>
				<span className={styles.emoji}>{city.emoji}</span>
				<h3 className={styles.name}>{city.cityName}</h3>
				<time className={styles.date}>{city.date}</time>
				<button className={styles.deleteBtn}>&times;</button>
			</Link>
		</li>
	);
};
export default CityItem;
