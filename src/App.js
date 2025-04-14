import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Homepage from './components/Homepage';
import ButtonsContainer from "./components/ButtonsContainer";
import SiteWrapper from "./components/SiteWrapper";
import { ModalProvider, Modal } from "./context/Modal";
import { AppProvider } from "./context/AppContext";
import './output.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <AppProvider>
      <ModalProvider>
        <BrowserRouter basename="/MTKdesign">  {/* Add basename here */}
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
        </BrowserRouter>
      </ModalProvider>
    </AppProvider>
  );
}

export default App;
