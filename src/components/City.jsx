import { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { CitiesContext } from "../context/CitiesContext";
import styles from "./City.module.css";
import Spinner from "./Spinner";
import Button from "./Button";

const City = () => {
	const formatDate = (date) =>
		new Intl.DateTimeFormat("en", {
			day: "numeric",
			month: "long",
			year: "numeric",
			weekday: "long",
		}).format(new Date(date));
	const { getCity, currentCity } = useContext(CitiesContext);
	console.log(currentCity, "from city: ");
	const { id } = useParams();
	useEffect(() => {
		getCity(id);
	}, [id]);

	const [searchParams, setSearchParams] = useSearchParams();
	// const { cityName, date, emoji, notes } = currentCity;
	// console.log(params);
	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");
	if (!currentCity) return <Spinner />;
	return (
		<div className={styles.city}>
			<div className={styles.row}>
				<h6>City name</h6>
				<h3>
					<span>{currentCity?.emoji}</span> {currentCity?.cityName}
				</h3>
			</div>

			<div className={styles.row}>
				<h6>You went to {currentCity?.cityName} on</h6>
				<p>{formatDate(currentCity?.date || null)}</p>
			</div>

			{currentCity?.notes && (
				<div className={styles.row}>
					<h6>Your notes</h6>
					<p>{currentCity?.notes}</p>
				</div>
			)}

			<div className={styles.row}>
				<h6>Learn more</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${currentCity?.cityName}`}
					target="_blank"
					rel="noreferrer"
				>
					Check out {currentCity?.cityName} on Wikipedia &rarr;
				</a>
			</div>

			<div>
				<Button type={"back"} onclick={() => navigate(-1)}>
					&larr; Back
				</Button>
			</div>
		</div>
	);
};
export default City;
