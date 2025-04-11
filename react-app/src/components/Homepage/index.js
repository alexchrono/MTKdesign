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

function Homepage() {
    const { buttonSelection, setButtonSelection } = useAppContext();
    return (
        <>
        {buttonSelection==='About Us' && (
 <div id='homeWrapper'>
 {/* Basic structure with a simple heading */}
 <h1>This is the start</h1>
</div>
        )}

        </>
    );
}

export default Homepage;
