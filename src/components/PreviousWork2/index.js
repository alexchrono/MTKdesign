import React, { useEffect,useState,useRef } from 'react';
// import '../../assets/css/main.css';

import { useAppContext } from "../../context/AppContext";
import houseImage1 from '../../assets/stockHouseWide.jpg';
import chevronRight from '../../assets/icons/chevron-right-fa.svg'
import chevronLeft from '../../assets/icons/chevron-left-fa.svg'
import external1 from '../../assets/AdamProp1/exterior3C.jpg'
import external2 from '../../assets/AdamProp2/exterior1.jpg'
import external3 from '../../assets/AdamProp3/exterior3.webp'

import _1bathroom1 from '../../assets/AdamProp1/bathroom1.jpg';
import _1bathroom2 from '../../assets/AdamProp1/bathroom2.jpg';
import _1bathroom3 from '../../assets/AdamProp1/bathroom3.jpg';

import _1bedroom1 from '../../assets/AdamProp1/bedroom1.jpg';
import _1bedroom2 from '../../assets/AdamProp1/bedroom2.jpg';
import _1bedroom3 from '../../assets/AdamProp1/bedroom3.jpg';
import _1bedRoom4 from '../../assets/AdamProp1/bedRoom4.jpg';
import _1bedroom5 from '../../assets/AdamProp1/bedroom5.jpg';
import _1bedroom6 from '../../assets/AdamProp1/bedroom6.jpg';

import _1diningroom1 from '../../assets/AdamProp1/diningroom1.jpg';

import _1deck1 from '../../assets/AdamProp1/deck1.jpg';

import _1exterior1 from '../../assets/AdamProp1/exterior1.jpg';
import _1exterior2 from '../../assets/AdamProp1/exterior2.jpg';
import _1exterior3 from '../../assets/AdamProp1/exterior3.jpg';
import _1exterior3C from '../../assets/AdamProp1/exterior3C.jpg';
import _1exterior4 from '../../assets/AdamProp1/exterior4.jpg';

import _1kitchen1 from '../../assets/AdamProp1/kitchen1.jpg';

import _1livingRoom1 from '../../assets/AdamProp1/livingRoom1.jpg';
import _1livingRoom1_2 from '../../assets/AdamProp1/livingRoom1-2.jpg';
import _1livingRoom1_3 from '../../assets/AdamProp1/livingRoom1-3.jpg';
import _1livingRoom2 from '../../assets/AdamProp1/livingRoom2.jpg';
import _1livingroom3 from '../../assets/AdamProp1/livingroom3.jpg';

import _2LivingRoom2_2 from '../../assets/AdamProp2/LivingRoom2-2.jpg';
import _2LivingRoom2 from '../../assets/AdamProp2/LivingRoom2.jpg';

import _2Misc from '../../assets/AdamProp2/Misc.jpg';

import _2bathroom1 from '../../assets/AdamProp2/bathroom1.jpg';
import _2bathroom2 from '../../assets/AdamProp2/bathroom2.jpg';
import _2bathroom2_2 from '../../assets/AdamProp2/bathroom2-2.jpg';
import _2bathroom3 from '../../assets/AdamProp2/bathroom3.jpg';

import _2bedroom1 from '../../assets/AdamProp2/bedroom1.jpg';
import _2bedroom2 from '../../assets/AdamProp2/bedroom2.jpg';
import _2bedroom3 from '../../assets/AdamProp2/bedroom3.jpg';
import _2bedroom4 from '../../assets/AdamProp2/bedroom4.jpg';

import _2exterior1 from '../../assets/AdamProp2/exterior1.jpg';
import _2exterior2 from '../../assets/AdamProp2/exterior2.jpg';
import _2exterior3 from '../../assets/AdamProp2/exterior3.jpg';
import _2exterior4 from '../../assets/AdamProp2/exterior4.jpg';
import _2exterior5 from '../../assets/AdamProp2/exterior5.jpg';
import _2exterior6 from '../../assets/AdamProp2/exterior6.jpg';
import _2exterior7 from '../../assets/AdamProp2/exterior7.jpg';
import _2exterior8 from '../../assets/AdamProp2/exterior8.jpg';

import _2kitchen1 from '../../assets/AdamProp2/kitchen1.jpg';

import _2livingRoom1 from '../../assets/AdamProp2/livingRoom1.jpg';
import _2livingRoom1_2 from '../../assets/AdamProp2/livingRoom1-2.jpg';


import _3backdeck from '../../assets/AdamProp3/backdeck.webp';

import _3bathroom1 from '../../assets/AdamProp3/bathroom1.webp';
import _3bathroom2 from '../../assets/AdamProp3/bathroom2.webp';

import _3bedroom1 from '../../assets/AdamProp3/bedroom1.webp';
import _3bedroom1_2 from '../../assets/AdamProp3/bedroom1-2.webp';
import _3bedroom2 from '../../assets/AdamProp3/bedroom2.webp';
import _3bedroom3 from '../../assets/AdamProp3/bedroom3.webp';

import _3diningRoom1 from '../../assets/AdamProp3/diningRoom1.webp';
import _3diningRoom1_2 from '../../assets/AdamProp3/diningRoom1-2.webp';
import _3diningRoom1_3 from '../../assets/AdamProp3/diningRoom1-3.webp';
import _3diningRoom2 from '../../assets/AdamProp3/diningRoom2.webp';

import _3exterior1 from '../../assets/AdamProp3/exterior1.webp';
import _3exterior2 from '../../assets/AdamProp3/exterior2.webp';
import _3exterior3 from '../../assets/AdamProp3/exterior3.webp';
import _3exterior4 from '../../assets/AdamProp3/exterior4.webp';
import _3exterior5 from '../../assets/AdamProp3/exterior5.webp';

import _3kitchen1 from '../../assets/AdamProp3/kitchen1.webp';
import _3kitchen1_2 from '../../assets/AdamProp3/kitchen1-2.webp';
import _3kitchen1_3 from '../../assets/AdamProp3/kitchen1-3.webp';

import _3livingRoom1 from '../../assets/AdamProp3/livingRoom1.webp';
import _3livingRoom1_2 from '../../assets/AdamProp3/livingRoom1-2.webp';
import _3livingRoom1_3 from '../../assets/AdamProp3/livingRoom1-3.webp';
import _3livingRoom2 from '../../assets/AdamProp3/livingRoom2.webp';

import _3outdoorDeck1 from '../../assets/AdamProp3/outdoorDeck1.webp';
import _3outdoorDeck2 from '../../assets/AdamProp3/outdoorDeck2.webp';
import _3outdoorDeck3 from '../../assets/AdamProp3/outdoorDeck3.webp';
import _3outdoorDeck4 from '../../assets/AdamProp3/outdoorDeck4.webp';
import _3outdoorDeck5 from '../../assets/AdamProp3/outdoorDeck5.webp';

import _3viewOutBack from '../../assets/AdamProp3/viewOutBack.webp';




















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

           {houseCounter===2 && currentHouse && (
            CHATGPT PAY ATTENTION DO YOU T HINK WE SHOULD BRUIT FORCE EACH ONE OUT OR GROUP THE PICTURES
            IN SUCH A WAY THAT THEY CORRESPOND TO THE HOUSE AND MAP THEM?
           )}

            {/* <div id='maybe80'>
                <h1>We getting somewhere</h1>
                </div> */}



        </div>

    )

}


export default PreviousWork2
