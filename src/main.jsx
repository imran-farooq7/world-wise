import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Applayout from "./pages/Applayout";
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
				element: <h1>Citites</h1>,
				path: "cities",
			},
			{
				element: <h1>Countries</h1>,
				path: "countries",
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
