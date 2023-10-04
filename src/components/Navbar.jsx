import Logo from "./Logo";
import styles from "./Navbar.module.css";
const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<Logo />
			<ul>
				<li>
					<a href="/pricing">Pricing</a>
				</li>
				<li>
					<a href="/product">Product</a>
				</li>
				<li>
					<a href="/login" className={styles.ctaLink}>
						Login
					</a>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
