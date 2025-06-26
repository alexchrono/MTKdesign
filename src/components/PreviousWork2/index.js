import React, { useEffect,useState,useRef } from 'react';
// import '../../assets/css/main.css';

import { useAppContext } from "../../context/AppContext";
import houseImage1 from '../../assets/stockHouseWide.jpg';
import chevronRight from '../../assets/icons/chevron-right-fa.svg'
import chevronLeft from '../../assets/icons/chevron-left-fa.svg'
import external1 from '../../assets/AdamProp1/exterior3C.jpg'
import external2 from '../../assets/AdamProp2/exterior1.jpg'
import external3 from '../../assets/AdamProp3/exterior3.webp'



















const PreviousWork2 = () => {
    const [houseCounter,setHouseCounter]=useState(1);
    const [roomSelector,setRoomSelector]=useState(0);

    const { buttonSelection, setButtonSelection } = useAppContext();
    //    PREFERRED ORDER: ['kitchen','bathroom','bedroom']
    // const house1 = {
    //     descriptors: ['Kitchen', 'Bathroom', 'Bedroom'],
    //     beforeImages: [kitchen1before, bathroom1before, bedroom1before],
    //     afterImages: [kitchen1after, bathroom1after, bedroom1after],
    //     external: external1
    //   };
    // const house2 = {
    //     descriptors: ['Kitchen', 'Bathroom', 'Bedroom'],
    //     beforeImages: [kitchen2before, bathroom2before, bedroom2before],
    //     afterImages: [kitchen2after, bathroom2after, bedroom2after],
    //     external: external2
    //   };

    //   const house3 = {
    //     descriptors: ['Kitchen', 'Bathroom', 'Bedroom'],
    //     beforeImages: [kitchen3before, bathroom3before, bedroom3before],
    //     afterImages: [kitchen3after, bathroom3after, bedroom3after],
    //     external: external3
    //   };

    const house1='Flamingo Ave'
    const house2='26 Elm Pl'
    const house3='38 Taft dr'

      const houses = [false,house1, house2, house3];

      const [currentHouse,setCurrentHouse]=useState(houses[(houseCounter-1)])



      useEffect(() => {
        setCurrentHouse(houses[houseCounter - 1]);
        // setRoomSelector(0);
      }, [houseCounter]);
    return (
        <div id='previousWorkWrapper2'>

            {!currentHouse && (
                <>
                <div id='warningSign'>
                    Select a property to continue

                </div>
                <div id='maybe20'>
                    <div id='letsCutDown'>

<div className='lcdPic' onClick={()=>{setHouseCounter(2)}}>
    <div className='lcdPicInner'>
    <img src={external1}></img>
    </div>
    <div className='lcdPicInnerText'>
        {house1}

        </div>



    </div>
    <div className='lcdPic' onClick={()=>{setHouseCounter(3)}}>
        <div className='lcdPicInner'>
        <img src={external2}></img>
        </div>
        <div className='lcdPicInnerText'>
        {house2}

        </div>

    </div>
    <div className='lcdPic' onClick={()=>{setHouseCounter(4)}}>
        <div className='lcdPicInner'>
        <img src={external3}></img>
        </div>
        <div className='lcdPicInnerText'>
        {house3}

        </div>

    </div>
                        </div>

                </div>
           </> )}

            {/* <div id='maybe80'>
                <h1>We getting somewhere</h1>
                </div> */}



        </div>

    )

}


export default PreviousWork2
