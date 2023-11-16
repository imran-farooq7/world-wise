// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Button from "./Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Form.module.css";
import { CitiesContext } from "../context/CitiesContext";
import Spinner from "./Spinner";

const Form = () => {
	const [cityName, setCityName] = useState("");
	const [countryName, setCountryName] = useState("");
	const [date, setDate] = useState(new Date());
	const [searchParams] = useSearchParams();
	const { loading, createCity } = useContext(CitiesContext);
	const navigate = useNavigate();
	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");
	useEffect(() => {
		const fetchCityData = async () => {
			try {
				const res = await fetch(
					`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
				);
				const data = await res.json();
				setCityName(data.city);
				setCountryName(data.countryName);
			} catch (error) {}
		};
		fetchCityData();
	}, [lat, lng]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!cityName && !date) return;
		const newCity = {
			cityName,
			date,
			countryName,
			position: {
				lat,
				lng,
			},
		};

		// console.log(newCity);
		await createCity(newCity);
		navigate("/app/cities");
	};
	if (loading) return <Spinner />;
	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.row}>
				<label htmlFor="cityName">City Name</label>
				<input
					type="text"
					id="cityName"
					value={cityName}
					onChange={(e) => setCityName(e.target.value)}
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="date">Date</label>
				{/* <input
					type="date"
					id="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/> */}
				<DatePicker
					id="date"
					selected={date}
					onChange={(date) => setDate(date)}
				/>
			</div>
			<div className={styles.buttons}>
				<Button type="primary">Add</Button>
				<Button
					type="back"
					onClick={(e) => {
						e.preventDefault();
						navigate(-1);
					}}
				>
					&larr; back
				</Button>
			</div>
		</form>
	);
};
export default Form;
