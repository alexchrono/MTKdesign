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
        <>
        {buttonSelection==='About Us' && (
            <div id="homeWrapper" style={{ width: '100%' }}>
            {/* Basic structure with a simple heading */}
 <BusinessDescriptionPortal/>
</div>
        )}

        </>
    );
}

export default Homepage;
