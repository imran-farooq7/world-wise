import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import styles from "./Applayout.module.css";
const Applayout = () => {
	return (
		<div className={styles.app}>
			<Sidebar />
			<Map />
		</div>
	);
};
export default Applayout;
