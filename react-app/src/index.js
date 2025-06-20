import React from "react";
import ReactDOM from "react-dom/client"; // Changed import to react-dom/client

import { BrowserRouter } from "react-router-dom";

import { ModalProvider, Modal } from "./context/Modal";
// import configureStore from "./store";
import App from "./App";

import "./output.css";

// if (process.env.NODE_ENV !== "production") {
// 	window.store = store;
// 	window.sessionActions = sessionActions;
// }

// Wrap the application with the Modal provider and render the Modal component
// after the App component so that all the Modal content will be layered as
// HTML elements on top of the all the other HTML elements:
function Root() {
	return (
		<ModalProvider>
			<BrowserRouter>
				<App />
				<Modal />
			</BrowserRouter>
		</ModalProvider>
	);
}

// Use createRoot to render the app in React 18
const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot instead of render
root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
