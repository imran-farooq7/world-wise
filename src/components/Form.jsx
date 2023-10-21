import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";

const Form = () => {
	const [cityName, setCityName] = useState("");
	const [countryName, setCountryName] = useState("");
	const [date, setDate] = useState(new Date());
	const navigate = useNavigate();
	return (
		<form className={styles.form}>
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
				<input
					type="date"
					id="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
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
