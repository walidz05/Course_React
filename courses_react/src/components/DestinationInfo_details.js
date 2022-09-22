import React from 'react'

const DestinationInfo_details = ({ language, languageText,currencyText,currency }) => {
  return (
    <>
      <div className="col-6">
        <div className="destinationInfo__details__head">{languageText}</div>
      </div>

      <div className="col-6 text-right">
        <div className="destinationInfo__details__text">{language}</div>
      </div>

      <div className="col-6">
        <div className="destinationInfo__details__head">{currencyText}</div>
      </div>

      <div className="col-6 text-right">
        <div className="destinationInfo__details__text">{currency}</div>
      </div>
    </>
  );
};

export default DestinationInfo_details