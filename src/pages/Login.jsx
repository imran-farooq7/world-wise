import { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [email, setEmail] = useState("jack@example.com");
	const [password, setPassword] = useState("qwerty");
	const { login, isAuthenticated } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (isAuthenticated) navigate("/app");
	}, [isAuthenticated]);

	const handleLogin = (e) => {
		e.preventDefault();
		// console.log(email, password, "email and password");
		login(email, password);
	};

	return (
		<main className={styles.login}>
			<form className={styles.form} onSubmit={handleLogin}>
				<div className={styles.row}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div className={styles.row}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>
				<div>
					<Button type="primary">Login</Button>
				</div>
			</form>
		</main>
	);
};
export default Login;
