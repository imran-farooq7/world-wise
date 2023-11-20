import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Applayout from "./pages/Applayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import CitiesProvider from "./context/CitiesContext";
import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/product",
		element: <Product />,
	},
	{
		path: "/pricing",
		element: <Pricing />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/app",
		element: (
			<ProtectedRoute>
				<Applayout />
			</ProtectedRoute>
		),
		children: [
			{
				element: <CityList />,
				index: true,
			},
			{
				element: <CityList />,
				path: "cities",
			},
			{
				element: <CountryList />,
				path: "countries",
			},
			{
				element: <Form />,
				path: "form",
			},
			{
				path: "cities/:id",
				element: <City />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
