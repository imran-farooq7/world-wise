import { useParams, useSearchParams } from "react-router-dom";

const City = () => {
	const { id } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	// console.log(params);
	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");
	return (
		<h1>
			City:{id} lat:{lat} lng:{lng}
		</h1>
	);
};
export default City;
