import React, { useEffect,useState,useRef } from 'react';
// import '../../assets/css/main.css';

import { useAppContext } from "../../context/AppContext";
import houseImage1 from '../../assets/stockHouseWide.jpg';
import chevronRight from '../../assets/icons/chevron-right-fa.svg'
import chevronLeft from '../../assets/icons/chevron-left-fa.svg'
import external1 from '../../assets/house1/external1.jpg';
import external2 from '../../assets/house2/external2.jpg';
import external3 from '../../assets/house3/external3.jpg';
import bathroom1before from '../../assets/house1/bathroom1before.jpg';
import bathroom2before from '../../assets/house2/bathroom2before.jpg';
import bathroom3before from '../../assets/house3/bathroom3before.jpg';
import bathroom1after from '../../assets/house1/bathroom1after.jpg';
import bathroom2after from '../../assets/house2/bathroom2after.jpg';
import bathroom3after from '../../assets/house3/bathroom3after.jpg';
// Bedroom images
import bedroom1before from '../../assets/house1/bedroom1before.jpg';
import bedroom2before from '../../assets/house2/bedroom2before.jpg';
import bedroom3before from '../../assets/house3/bedroom3before.jpg';
import bedroom1after from '../../assets/house1/bedroom1after.jpg';
import bedroom2after from '../../assets/house2/bedroom2after.jpg';
import bedroom3after from '../../assets/house3/bedroom3after.jpg';

// Kitchen images
import kitchen1before from '../../assets/house1/kitchen1before.jpg';
import kitchen2before from '../../assets/house2/kitchen2before.jpg';
import kitchen3before from '../../assets/house3/kitchen3before.jpg';
import kitchen1after from '../../assets/house1/kitchen1after.jpg';
import kitchen2after from '../../assets/house2/kitchen2after.jpg';
import kitchen3after from '../../assets/house3/kitchen3after.jpg';















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
                <div id='maybe20'>
                    <div id='letsCutDown'>

<div className='lcdPic'>

    </div>
    <div className='lcdPic'>

    </div>
    <div className='lcdPic'>

    </div>
                        </div>

                </div>
            )}

            <div id='maybe80'>
                <h1>We getting somewhere</h1>
                </div>



        </div>

    )

}


export default PreviousWork2
