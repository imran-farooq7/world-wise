import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Applayout from "./pages/Applayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
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
		element: <Applayout />,
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
				path: "/app/cities/:id",
				element: <City />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
