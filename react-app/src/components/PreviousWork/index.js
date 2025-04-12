import React, { useEffect,useState,useRef } from 'react';
// import '../../assets/css/main.css';

import { useAppContext } from "../../context/AppContext";
import houseImage1 from '../../assets/stockHouseWide.jpg';












const PreviousWork = () => {

    const { buttonSelection, setButtonSelection } = useAppContext();
    return (
        <div id='previousWorkWrapper'>

            <div id='borderPW'>

                <div className='listPicsWrapper'>

                </div>

                <div id='listPicsCenter'>
                    <div id='housePreview'>
                    <img src={houseImage1} alt="Stock House" id='good4Adam' />

                    </div>
                    <div id='chevronHolder'>
                        <div className='twentyPercent'>
                        <img src='../../assets/icons/chevron-left-fa.svg' className='chevronz'/>
                        </div>
                        <div className='sixtyPercent'></div>
                        <div className='twentyPercent'>
                        <img src='../../assets/icons/chevron-right-fa.svg' className='chevronz'/>
                        </div>

                    </div>

                </div>

                <div className='listPicsWrapper'>

                </div>

            </div>

        </div>

    )

}


export default PreviousWork
