import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated } = useContext(AuthContext);
	const navigate = useNavigate();
	useEffect(() => {
		if (!isAuthenticated) navigate("/login");
	});
	return <div>{children}</div>;
};
export default ProtectedRoute;
