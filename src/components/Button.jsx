import styles from "./Button.module.css";
const Button = ({ type, children, onClick }) => {
	return (
		<button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
			{children}
		</button>
	);
};
export default Button;
