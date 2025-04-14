import React from "react";
import ReactDOM from "react-dom/client"; // Changed import to react-dom/client

import { ModalProvider, Modal } from "./context/Modal";
import App from "./App";
import "./output.css";

function Root() {
	return (
		<ModalProvider>
			<App />
			<Modal />
		</ModalProvider>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot instead of render
root.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>
);
