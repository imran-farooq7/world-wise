import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import AppNav from "./AppNav";

const Sidebar = ({ cities, loading }) => {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<AppNav />
			<Outlet context={[cities, loading]} />
			<footer className={styles.footer}>
				<p>&copy; Copyright {new Date().getFullYear}</p>
			</footer>
		</div>
	);
};
export default Sidebar;
