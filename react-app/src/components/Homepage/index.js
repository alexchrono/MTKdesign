import React from "react";
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

function Homepage() {
    const { buttonSelection, setButtonSelection } = useAppContext();
    return (
        <div id='makeCute'>
        {buttonSelection==='About Us' && (

         
 <BusinessDescriptionPortal/>

        )}
        </div>

    );
}

export default Homepage;
