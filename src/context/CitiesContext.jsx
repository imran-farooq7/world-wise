import { createContext, useEffect, useState } from "react";
export const CitiesContext = createContext(null);

const CitiesProvider = ({ children }) => {
	const [cities, setCities] = useState();
	const [currentCity, setCurrentCity] = useState();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const getcities = async () => {
			setLoading(true);
			const res = await fetch("http://localhost:3004/cities");
			const data = await res.json();
			setCities(data);
			setLoading(false);
		};
		getcities();
	}, []);
	const getCity = async (id) => {
		setLoading(true);
		const res = await fetch(`http://localhost:3004/cities/${id}`);
		const data = await res.json();
		setCurrentCity(data);
		setLoading(false);
	};
	const createCity = async (newCity) => {
		setLoading(true);
		const res = await fetch(`http://localhost:3004/cities`, {
			method: "POST",
			body: JSON.stringify(newCity),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();
		// console.log(data);
		setCities((cities) => [...cities, data]);
		setLoading(false);
	};

	return (
		<CitiesContext.Provider
			value={{
				cities,
				loading,
				getCity,
				currentCity,
				createCity,
			}}
		>
			{children}
		</CitiesContext.Provider>
	);
};
export default CitiesProvider;
