import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import GoogleAuthButton from '../GoogleAuthButton'
import DOMPurify from 'dompurify';
import { MakeButton } from "../utils";
import { ThunkGetJobs } from "../../store/jobs";
// import "./LoginForm.css";
import './homepage.css'
import {showDetails} from './mobileScript';


function Homepage() {
    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobs)
    const actual = useSelector(state => state.jobs.jobs)
    const [toggleDetailsMobile,setToggleDetailsMobile]= useState(false)

    const displayRelative = (ele) => {
        if (actual[ele].site === 'indeed') {
            return actual[ele].advn
        }
        else {
            return actual[ele].jobId
        }

    }

    // useEffect(() => {
    //     if (toggleDetailsMobile){
    //         showDetails(toggleDetailsMobile)
    //     }
    //     else {restoreNormal()}



    // }, [toggleDetailsMobile]);


    useEffect(() => {

        const fetchData = async () => {
            await dispatch(ThunkGetJobs());

        };
        fetchData();
    }, [dispatch]);

    console.log('JOBS ISSSSSS', jobs)

    return (
        <>

            <div id='homeWrapper'>
                <div id='onlyVisibleMobile'>
                    Click Any Header To Drag Job
                </div>
                <div id='wrapperNewJobs'>
                    {jobs.allJobs.length > 0 ? (
                        <ul id='allOurJobs'>
                            {jobs.allJobs.map((job, index) => {
                                const cleanHtml = DOMPurify.sanitize(actual[job]['description'])
                                return (
                                    <div key={index} className={`newJobCard newJobCard-${index}`}>
                                        {/* <li>Ident: {displayRelative(job)}</li> */}
                                        <li className='titleJob'> {actual[job]['title']}</li>
                                        <li>
                                            <div className='companyName'>
                                                <div className='companyName1'>Company:</div> <div className='companyName2'>{actual[job]['companyName']}</div>
                                            </div></li>
                                        <li><div className='payClass'>{actual[job]['pay']}</div></li>
                                        <li>
                                            <div className='wrapperButtonz'>
                                                <div className='wrapperButtonz1'>
                                                <MakeButton
    onClick={(e) => {
        e.preventDefault();
        window.open(actual[job]['link'], '_blank', 'noopener,noreferrer');
    }}
    text='Apply'
/>
 {/* <a href={actual[job]['link']} target="_blank" rel="noopener noreferrer">Apply</a> */}
                                                </div>
                                                <div className='wrapperButtonz2'>


                                                <MakeButton
    onClick={(e) => {
        e.preventDefault();
        setToggleDetailsMobile(index+1)
    }}
    text='Details'
/>




                                                    </div></div></li>
                                        <div className={`detailsNew detailsNew-${index}`}>
                                        <div className={`pretty1`} dangerouslySetInnerHTML={{ __html: cleanHtml }}>
                                        </div>
                                        <div className='buttonsClose'>
                                            <div className='buttonsClose1'>
                                        <MakeButton
    onClick={(e) => {
        e.preventDefault();
        setToggleDetailsMobile(false)
    }}
    text='Close'
/></div>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </ul>
                    ) : (
                        <p>No jobs found</p>
                    )}
                </div>

            </div>
        </>)

}


export default Homepage;
