import React, { useEffect, useState } from 'react';
import { useAppContext } from "../../context/AppContext";

import chevronRight from '../../assets/icons/chevron-right-fa.svg';
import chevronLeft from '../../assets/icons/chevron-left-fa.svg';

import external1 from '../../assets/AdamProp1/exterior3C.jpg';
import external2 from '../../assets/AdamProp2/exterior1.jpg';
import external3 from '../../assets/AdamProp3/exterior3.webp';

// House 1
// const House1 = {
//   _1bathroom1: require('../../assets/AdamProp1/bathroom1.jpg'),
//   _1bathroom2: require('../../assets/AdamProp1/bathroom2.jpg'),
//   _1bathroom3: require('../../assets/AdamProp1/bathroom3.jpg'),
//   _1bedroom1: require('../../assets/AdamProp1/bedroom1.jpg'),
//   _1bedroom2: require('../../assets/AdamProp1/bedroom2.jpg'),
//   _1bedroom3: require('../../assets/AdamProp1/bedroom3.jpg'),
//   _1bedRoom4: require('../../assets/AdamProp1/bedRoom4.jpg'),
//   _1bedroom5: require('../../assets/AdamProp1/bedroom5.jpg'),
//   _1bedroom6: require('../../assets/AdamProp1/bedroom6.jpg'),
//   _1diningroom1: require('../../assets/AdamProp1/diningroom1.jpg'),
//   _1deck1: require('../../assets/AdamProp1/deck1.jpg'),
//   _1exterior1: require('../../assets/AdamProp1/exterior1.jpg'),
//   _1exterior2: require('../../assets/AdamProp1/exterior2.jpg'),
//   _1exterior3: require('../../assets/AdamProp1/exterior3.jpg'),
//   _1exterior3C: require('../../assets/AdamProp1/exterior3C.jpg'),
//   _1exterior4: require('../../assets/AdamProp1/exterior4.jpg'),
//   _1kitchen1: require('../../assets/AdamProp1/kitchen1.jpg'),
//   _1livingRoom1: require('../../assets/AdamProp1/livingRoom1.jpg'),
//   _1livingRoom1_2: require('../../assets/AdamProp1/livingRoom1-2.jpg'),
//   _1livingRoom1_3: require('../../assets/AdamProp1/livingRoom1-3.jpg'),
//   _1livingRoom2: require('../../assets/AdamProp1/livingRoom2.jpg'),
//   _1livingroom3: require('../../assets/AdamProp1/livingroom3.jpg'),
// };

const isMobileImp=false;
const House1 = {
  bathRoom: {
  _1bathroom1: require('../../assets/AdamProp1/bathroom1.jpg'),
  _1bathroom2: require('../../assets/AdamProp1/bathroom2.jpg'),
  _1bathroom3: require('../../assets/AdamProp1/bathroom3.jpg')},
  bedRoom: {
  _1bedroom1: require('../../assets/AdamProp1/bedroom1.jpg'),
  _1bedroom2: require('../../assets/AdamProp1/bedroom2.jpg'),
  _1bedroom3: require('../../assets/AdamProp1/bedroom3.jpg'),
  _1bedRoom4: require('../../assets/AdamProp1/bedRoom4.jpg'),
  _1bedroom5: require('../../assets/AdamProp1/bedroom5.jpg'),
  _1bedroom6: require('../../assets/AdamProp1/bedroom6.jpg')},
  misc: {
  _1diningroom1: require('../../assets/AdamProp1/diningroom1.jpg')},
  exterior: {
  _1deck1: require('../../assets/AdamProp1/deck1.jpg'),
  _1exterior1: require('../../assets/AdamProp1/exterior1.jpg'),
  _1exterior2: require('../../assets/AdamProp1/exterior2.jpg'),
  _1exterior3: require('../../assets/AdamProp1/exterior3.jpg'),
  _1exterior3C: require('../../assets/AdamProp1/exterior3C.jpg'),
  _1exterior4: require('../../assets/AdamProp1/exterior4.jpg')},
  kitchen: {
  _1kitchen1: require('../../assets/AdamProp1/kitchen1.jpg')},
  livingRoom: {
  _1livingRoom1: require('../../assets/AdamProp1/livingRoom1.jpg'),
  _1livingRoom1_2: require('../../assets/AdamProp1/livingRoom1-2.jpg'),
  _1livingRoom1_3: require('../../assets/AdamProp1/livingRoom1-3.jpg'),
  _1livingRoom2: require('../../assets/AdamProp1/livingRoom2.jpg'),
  _1livingroom3: require('../../assets/AdamProp1/livingroom3.jpg')}
};

// House 2
const House2 = {
  bathRoom: {
    _2bathroom1: require('../../assets/AdamProp2/bathroom1.jpg'),
    _2bathroom2: require('../../assets/AdamProp2/bathroom2.jpg'),
    _2bathroom2_2: require('../../assets/AdamProp2/bathroom2-2.jpg'),
    _2bathroom3: require('../../assets/AdamProp2/bathroom3.jpg'),
  },
  bedRoom: {
    _2bedroom1: require('../../assets/AdamProp2/bedroom1.jpg'),
    _2bedroom2: require('../../assets/AdamProp2/bedroom2.jpg'),
    _2bedroom3: require('../../assets/AdamProp2/bedroom3.jpg'),
    _2bedroom4: require('../../assets/AdamProp2/bedroom4.jpg'),
  },
  exterior: {
    _2exterior1: require('../../assets/AdamProp2/exterior1.jpg'),
    _2exterior2: require('../../assets/AdamProp2/exterior2.jpg'),
    _2exterior3: require('../../assets/AdamProp2/exterior3.jpg'),
    _2exterior4: require('../../assets/AdamProp2/exterior4.jpg'),
    _2exterior5: require('../../assets/AdamProp2/exterior5.jpg'),
    _2exterior6: require('../../assets/AdamProp2/exterior6.jpg'),
    _2exterior7: require('../../assets/AdamProp2/exterior7.jpg'),
    _2exterior8: require('../../assets/AdamProp2/exterior8.jpg'),
  },
  kitchen: {
    _2kitchen1: require('../../assets/AdamProp2/kitchen1.jpg'),
  },
  livingRoom: {
    _2livingRoom1: require('../../assets/AdamProp2/livingRoom1.jpg'),
    _2livingRoom1_2: require('../../assets/AdamProp2/livingRoom1-2.jpg'),
    _2LivingRoom2: require('../../assets/AdamProp2/LivingRoom2.jpg'),
    _2LivingRoom2_2: require('../../assets/AdamProp2/LivingRoom2-2.jpg'),
  },
  misc: {
    _2Misc: require('../../assets/AdamProp2/Misc.jpg'),
  },
};


// House 3
const House3 = {
  bathRoom: {
    _3bathroom1: require('../../assets/AdamProp3/bathroom1.webp'),
    _3bathroom2: require('../../assets/AdamProp3/bathroom2.webp'),
  },
  bedRoom: {
    _3bedroom1: require('../../assets/AdamProp3/bedroom1.webp'),
    _3bedroom1_2: require('../../assets/AdamProp3/bedroom1-2.webp'),
    _3bedroom2: require('../../assets/AdamProp3/bedroom2.webp'),
    _3bedroom3: require('../../assets/AdamProp3/bedroom3.webp'),
  },
  exterior: {
    _3exterior1: require('../../assets/AdamProp3/exterior1.webp'),
    _3exterior2: require('../../assets/AdamProp3/exterior2.webp'),
    _3exterior3: require('../../assets/AdamProp3/exterior3.webp'),
    _3exterior4: require('../../assets/AdamProp3/exterior4.webp'),
    _3exterior5: require('../../assets/AdamProp3/exterior5.webp'),
    _3backdeck: require('../../assets/AdamProp3/backdeck.webp'),
    _3outdoorDeck1: require('../../assets/AdamProp3/outdoorDeck1.webp'),
    _3outdoorDeck2: require('../../assets/AdamProp3/outdoorDeck2.webp'),
    _3outdoorDeck3: require('../../assets/AdamProp3/outdoorDeck3.webp'),
    _3outdoorDeck4: require('../../assets/AdamProp3/outdoorDeck4.webp'),
    _3outdoorDeck5: require('../../assets/AdamProp3/outdoorDeck5.webp'),
    _3viewOutBack: require('../../assets/AdamProp3/viewOutBack.webp'),
  },
  kitchen: {
    _3kitchen1: require('../../assets/AdamProp3/kitchen1.webp'),
    _3kitchen1_2: require('../../assets/AdamProp3/kitchen1-2.webp'),
    _3kitchen1_3: require('../../assets/AdamProp3/kitchen1-3.webp'),
  },
  livingRoom: {
    _3livingRoom1: require('../../assets/AdamProp3/livingRoom1.webp'),
    _3livingRoom1_2: require('../../assets/AdamProp3/livingRoom1-2.webp'),
    _3livingRoom1_3: require('../../assets/AdamProp3/livingRoom1-3.webp'),
    _3livingRoom2: require('../../assets/AdamProp3/livingRoom2.webp'),
  },
  misc: {
    _3diningRoom1: require('../../assets/AdamProp3/diningRoom1.webp'),
    _3diningRoom1_2: require('../../assets/AdamProp3/diningRoom1-2.webp'),
    _3diningRoom1_3: require('../../assets/AdamProp3/diningRoom1-3.webp'),
    _3diningRoom2: require('../../assets/AdamProp3/diningRoom2.webp'),
  },
};


const house1 = 'Flamingo Ave';
const house2 = '26 Elm Pl';
const house3 = '38 Taft dr';

const houseImageData = {
  2: {
    name: house1,
    external: external1,
    bedRoom: House1.bedRoom,
    bathRoom: House1.bathRoom,
    kitchen: House1.kitchen,
    livingRoom: House1.livingRoom,
    exterior: House1.exterior,
    misc: House1.misc,
  },
  3: {
    name: house2,
    external: external2,
    bedRoom: House2.bedRoom,
    bathRoom: House2.bathRoom,
    kitchen: House2.kitchen,
    livingRoom: House2.livingRoom,
    exterior: House2.exterior,
    misc: House2.misc,
  },
  4: {
    name: house3,
    external: external3,
    bedRoom: House3.bedRoom,
    bathRoom: House3.bathRoom,
    kitchen: House3.kitchen,
    livingRoom: House3.livingRoom,
    exterior: House3.exterior,
    misc: House3.misc,
  },
};


const PreviousWork2 = () => {
  const [houseCounter, setHouseCounter] = useState(1);
  const [roomSelector, setRoomSelector] = useState(0);
  const { buttonSelection, setButtonSelection } = useAppContext();

  const [currentHouse, setCurrentHouse] = useState(houseImageData[houseCounter]?.name || false);

  useEffect(() => {
    setCurrentHouse(houseImageData[houseCounter]?.name || false);
  }, [houseCounter]);

  return (
    <div id="previousWorkWrapper2">
      {!currentHouse && (
        <>
          <div id="warningSign">Select a property to continue</div>
          <div id="maybe20">
            <div id="letsCutDown">
              <div className="lcdPic" onClick={() => setHouseCounter(2)}>
                <div className="lcdPicInner">
                  <img src={external1} />
                </div>
                <div className="lcdPicInnerText">{house1}</div>
              </div>
              <div className="lcdPic" onClick={() => setHouseCounter(3)}>
                <div className="lcdPicInner">
                  <img src={external2} />
                </div>
                <div className="lcdPicInnerText">{house2}</div>
              </div>
              <div className="lcdPic" onClick={() => setHouseCounter(4)}>
                <div className="lcdPicInner">
                  <img src={external3} />
                </div>
                <div className="lcdPicInnerText">{house3}</div>
              </div>
            </div>
          </div>
        </>
      )}

      {houseImageData[houseCounter]?.livingRoom
  ? Object.entries(houseImageData[houseCounter].livingRoom).reduce((acc, curr, index, arr) => {
      if (isMobileImp) {
        acc.push([curr]);
      } else if (index % 2 === 0) {
        const pair = [curr, arr[index + 1]].filter(Boolean);
        acc.push(pair);
      }
      return acc;
    }, []).map((group, i) => (
      <div className='outerImgWrapper' key={`wrapper-${i}`}>
        {group.map(([key, img], j) => (
          <div className='imgHolder' key={`holder-${i}-${j}`}>
            <img src={img} alt={key} />
          </div>
        ))}
      </div>
    ))
  : null}


    </div>
  );
};

export default PreviousWork2;
