import styles from "./Logo.module.css";
const Logo = () => {
	return (
		<a href="/">
			<img src="/logo.png" alt="logo" className={styles.logo} />
		</a>
	);
};
export default Logo;
