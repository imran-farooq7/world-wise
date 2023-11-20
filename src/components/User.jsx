import { useContext } from "react";
import styles from "./User.module.css";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// const FAKE_USER = {
//   name: "Jack",
//   email: "jack@example.com",
//   password: "qwerty",
//   avatar: "https://i.pravatar.cc/100?u=zz",
// };

function User() {
	const { user, logout } = useContext(AuthContext);
	const navigate = useNavigate();

	function handleClick() {
		logout();
		navigate("/");
	}

	return (
		<div className={styles.user}>
			<img src={user?.avatar} alt={user?.name} />
			<span>Welcome, {user?.name}</span>
			<button onClick={handleClick}>Logout</button>
		</div>
	);
}

export default User;
