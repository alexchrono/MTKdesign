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















const PreviousWork = () => {
    const [houseCounter,setHouseCounter]=useState(1);
    const [roomSelector,setRoomSelector]=useState(0);

    const { buttonSelection, setButtonSelection } = useAppContext();
    //    PREFERRED ORDER: ['kitchen','bathroom','bedroom']
    const house1 = {
        descriptors: ['Kitchen', 'Bathroom', 'Bedroom'],
        beforeImages: [kitchen1before, bathroom1before, bedroom1before],
        afterImages: [kitchen1after, bathroom1after, bedroom1after],
        external: external1
      };
    const house2 = {
        descriptors: ['Kitchen', 'Bathroom', 'Bedroom'],
        beforeImages: [kitchen2before, bathroom2before, bedroom2before],
        afterImages: [kitchen2after, bathroom2after, bedroom2after],
        external: external2
      };

      const house3 = {
        descriptors: ['Kitchen', 'Bathroom', 'Bedroom'],
        beforeImages: [kitchen3before, bathroom3before, bedroom3before],
        afterImages: [kitchen3after, bathroom3after, bedroom3after],
        external: external3
      };

      const houses = [house1, house2, house3];

      const [currentHouse,setCurrentHouse]=useState(houses[(houseCounter-1)])



      useEffect(() => {
        setCurrentHouse(houses[houseCounter - 1]);
        // setRoomSelector(0);
      }, [houseCounter]);
    return (
        <div id='previousWorkWrapper'>

            <div id='borderPW'>

            <div className='listPicsWrapper'>
            <div className='justApic'>
          <img src={currentHouse?.beforeImages[roomSelector]}  />
        </div>
  {/* {Array.from({ length: 40 }).map((_, index) => {
    const beforeImage = currentHouse?.beforeImages?.[index];
    return (
      beforeImage && (
        <div className='justApic' key={index}>
          <img src={beforeImage} alt={`Before ${index}`} />
        </div>
      )
    );
  })} */}
</div>

                <div id='listPicsCenter'>
                <div id='chevronHolder'>
  <div className='twentyPercent'>
    <img
      src={chevronLeft}
      className='chevronz'
      onClick={() => {
        setHouseCounter((prev) =>
          prev === 1 ? houses.length : prev - 1
        );
      }}
    />
  </div>
  <div className='sixtyPercent'>
    house {houseCounter} of {houses.length}
  </div>
  <div className='twentyPercent'>
    <img
      src={chevronRight}
      className='chevronz'
      onClick={() => {
        setHouseCounter((prev) =>
          prev === houses.length ? 1 : prev + 1
        );
      }}
    />
  </div>
</div>

                    <div id='housePreview'>
                    <img src={currentHouse.external} alt="Stock House" id='good4Adam' />

                    </div>


                    <div id='rowAmongstColumns'>
                        {/* <div className='tinyPicColumn'>

                        {currentHouse?.beforeImages.map((ele, idx) => (
  <div className='tinyImagezWrapper' key={idx}>
    <img className='tinyImagez' src={ele}/>

  </div>)
)}

                        </div> */}
                        <div id='roomIdentifier'>
  {currentHouse?.descriptors.map((descriptor, idx) => (
    <div className={roomSelector===idx?'totalPackageSelected':'totalPackage'} key={idx} onClick={()=>{setRoomSelector(idx)}}>
      <div className='totalPackageInner' key={`inner${idx}`}>
      <div className='totalPackageHeader' key={`header${idx}`}>
      <span className='totalPackageHeaderSpan' key={`headerSpan${idx}`}>
        {descriptor}
        </span>
      </div>
      <div className='totalPackageImageContainerWrapper' key={`totalPackageImageContainerWrapper${idx}`}>
      <div className='totalPackageImageContainer' key={`totalPackageImageContainer${idx}`}>
        <div className='totalPackageImageContainerLeft' key={`totalPackageImageContainerLeft${idx}`}>
          <img
            src={currentHouse?.beforeImages?.[idx]}
            className='tinyImagezBoth'
            key={`imageBeforePic${idx}`}
          />
        </div>
        <div className='totalPackageImageContainerRight' key={`totalPackageImageContainerRight${idx}`}>
          <img
            src={currentHouse?.afterImages?.[idx]}
            className='tinyImagezBoth'
            key={`imageAfterPic${idx}`}
          />
        </div>
      </div>
      </div>
    </div>
    </div>
  ))}
</div>
                        {/* <div className='tinyPicColumn'>

                        {currentHouse?.afterImages.map((ele, idx) => (
  <div className='tinyImagezWrapper' key={idx}>
    <img className='tinyImagez' src={ele}/>

  </div>)
)}

                            </div> */}

                    </div>



                    {/* <div className='listPicsWrapper'>
                    <div className='justApic'>
                        <img src={beforeBathrom} />
                    </div>
                    <div className='justApic'>
                        <img src={beforeBathrom} />
                    </div>
                    <div className='justApic'>
                        <img src={beforeBathrom} />
                    </div>
                    <div className='justApic'>
                        <img src={beforeBathrom} />
                    </div>
                    <div className='justApic'>
                        <img src={beforeBathrom} />
                    </div>

                </div> */}

                </div>

                <div className='listPicsWrapper'>
                <div className='justApic'>
          <img src={currentHouse?.afterImages[roomSelector]}  />
        </div>
</div>

            </div>

        </div>

    )

}


export default PreviousWork
