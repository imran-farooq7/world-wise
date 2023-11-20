import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const User = {
		name: "Jack",
		email: "jack@example.com",
		password: "qwerty",
		avatar: "https://i.pravatar.cc/100?u=zz",
	};
	const login = (email, password) => {
		if (User.email === email && User.password === password) {
			setUser(User);
			setIsAuthenticated(true);
		}
	};
	const logout = () => {
		setUser();
		setIsAuthenticated(false);
	};
	return (
		<AuthContext.Provider value={{ login, logout, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
