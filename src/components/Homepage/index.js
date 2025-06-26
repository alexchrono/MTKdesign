import React, {useState,useEffect} from "react";
// import { useModal } from "../../context/Modal";
// import GoogleAuthButton from '../GoogleAuthButton'
// import DOMPurify from 'dompurify';
// import { MakeButton } from "../utils";
// import { ThunkGetJobs } from "../../store/jobs";
// import "./LoginForm.css";
// import './homepage.css'
// import { showDetails } from './mobileScript';
import { useAppContext } from "../../context/AppContext";
import BusinessDescriptionPortal from "../BusinessDescriptionPortal";
import PreviousWork from "../PreviousWork";
import PreviousWork2 from "../PreviousWork2";

function Homepage() {
    const { buttonSelection, setButtonSelection } = useAppContext();
    const [shouldShowPortal, setShouldShowPortal] = useState(false);
    const [fadeClass, setFadeClass] = useState('');

    useEffect(() => {
        if (buttonSelection === 'About Us') {
          setShouldShowPortal(true);
          // Trigger fade-in
          setTimeout(() => setFadeClass('fade-in'), 10); // delay so transition kicks in
        } else if (shouldShowPortal) {
          // Trigger fade-out
          setShouldShowPortal(false);
          setFadeClass('fade-out');
          setTimeout(() => {

            setFadeClass('');
          }, 1000); // Match CSS transition time
        }
      }, [buttonSelection]);
    return (
        <div className={`main-container ${fadeClass}`} id='theMainOne'>
        {shouldShowPortal && <BusinessDescriptionPortal />}
        {buttonSelection === 'Previous Work' && <PreviousWork2 />}
      </div>

    );
}

export default Homepage;
