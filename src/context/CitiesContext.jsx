import { createContext, useEffect, useState } from "react";
export const CitiesContext = createContext(null);

const CitiesProvider = ({ children }) => {
	const [cities, setCities] = useState();
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

	return (
		<CitiesContext.Provider
			value={{
				cities,
				loading,
			}}
		>
			{children}
		</CitiesContext.Provider>
	);
};
export default CitiesProvider;
