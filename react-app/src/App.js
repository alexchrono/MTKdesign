import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Homepage from './components/Homepage';
import ButtonsContainer from "./components/ButtonsContainer"; // <-- make sure this exists
import SiteWrapper from "./components/SiteWrapper"; // <-- your new wrapper
import { ModalProvider, Modal } from "./context/Modal";
import { AppProvider } from "./context/AppContext";
import './output.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <AppProvider>
      <ModalProvider>
        <Navigation isLoaded={isLoaded} />
        <SiteWrapper>
          <ButtonsContainer />
          {isLoaded && (
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<LoginFormPage />} />
              <Route path="/signup" element={<SignupFormPage />} />
            </Routes>
          )}
        </SiteWrapper>
        <Modal />
      </ModalProvider>
    </AppProvider>
  );
}

export default App;
