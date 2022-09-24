import React from 'react';
import { AiOutlineCheck, } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";


const Facilities = ({TextRoom,valueRoom,TextFood,valueFood}) => {
  return (
    <>
      <div className="cities__body__contents__facilities__name">{TextRoom ? TextRoom : TextFood}</div>

      <div className="cities__body__contents__facilities__value">
        {valueRoom ? valueRoom === true ? (
          <AiOutlineCheck color="green" />
        ) : valueRoom === false ? (
          <IoIosClose color="red" />
        ) : (
          ""
        ) : valueFood === true ? <AiOutlineCheck color='green'/> : valueFood === false ? <IoIosClose color='red' /> :'' }
      </div>

    </>
  );
}

export default Facilities