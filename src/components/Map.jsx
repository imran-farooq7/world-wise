import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
	useMap,
	useMapEvents,
} from "react-leaflet";
import { useContext } from "react";
import { CitiesContext } from "../context/CitiesContext";
const Map = () => {
	const navigate = useNavigate();
	const { cities } = useContext(CitiesContext);
	const [searchParams, setSearchParams] = useSearchParams();
	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	return (
		<div className={styles.mapContainer}>
			<MapContainer
				center={[40, -3]}
				zoom={7}
				scrollWheelZoom={false}
				className={styles.map}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{cities?.map((city) => (
					<Marker
						position={[city.position.lat, city.position.lng]}
						key={city.id}
					>
						<Popup>{city.cityName}</Popup>
					</Marker>
				))}
				<ChangeMapView position={[lat | 40, lng | 0]} />
				<GetLatLng />
			</MapContainer>
		</div>
	);
};
const ChangeMapView = ({ position }) => {
	const map = useMap();
	map.setView(position);
	return null;
};
const GetLatLng = () => {
	const navigate = useNavigate();
	useMapEvents({
		click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
	});
};
export default Map;
