import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Homepage from './components/Homepage';
import { ModalProvider, Modal } from "./context/Modal";
import './output.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <ModalProvider>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/signup" element={<SignupFormPage />} />
        </Routes>
      )}
      <Modal />
    </ModalProvider>
  );
}

export default App;
