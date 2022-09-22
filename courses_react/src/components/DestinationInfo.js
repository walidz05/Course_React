import React from 'react'
import DestinationInfo_details from './DestinationInfo_details';

const DestinationInfo = ({details}) => {
  console.log('details',details)
  return (
    <div className="destinationInfo">
      <div className="container">
        <h2 className="heading">Overview</h2>
        <div className="row">
          <div className="col-8">
            <p className="destinationInfo__p">{details.details}</p>
          </div>
        </div>
        <h2 className="heading">Good to know</h2>

        <div className="row">
          <div className="col-8">
            <div className="destinationInfo__details">
              <div className="row">
                <DestinationInfo_details
                  language={details.language}
                  languageText="language"
                />
                <DestinationInfo_details
                  currencyText='currency'
                  currency={details.currency}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationInfo