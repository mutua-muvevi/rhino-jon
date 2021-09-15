import React from "react";
import "../Storage.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentsDollar, faFileAlt, faPlaneDeparture, faShip, faShippingFast, faWarehouse } from '@fortawesome/free-solid-svg-icons'


const StorageContent = () => {
  return (
    <div className="storage-content">
      <div className="storage-content-content">
        <div className="storage-content-content-content">
          <div className="storage-content-content-left"></div>
          <div className="storage-content-content-right">
            <div className="storage-content-right-cards">
              <p className="storage-content-right-cards-row">
                Rhinojohn Prime Metal also offers warehousing and storage
                services for minerals through available customs bonded
                warehouses and vaults at our facilities. The safety of mining
                products stored in our custody is guaranteed with the support of
                both government and private security services.
              </p>
              <div className="lower-button-group">
                <Link to="/service-type">
                  <button className="storage-content-button">
                    Request a quote
                  </button>
                </Link>
                <Link to="/quotation">
                  <button className="storage-content-button">
                    Make enquiry
                  </button>
                </Link>
              </div>
            </div>
            <div className="service-fontawesome-div">
                <Link to="/services-trade" className="service-fontawesome-icon">
                    <FontAwesomeIcon size="2x" icon={faCommentsDollar} />
                </Link>
                <Link to="/services-air" className="service-fontawesome-icon">
                    <FontAwesomeIcon size="2x" icon={faPlaneDeparture} />
                </Link>
                <Link to="/services-ocean" className="service-fontawesome-icon">
                    <FontAwesomeIcon size="2x" icon={faShip} />
                </Link>
                <Link to="/services-land" className="service-fontawesome-icon">
                    <FontAwesomeIcon size="2x" icon={faShippingFast} />
                </Link>
                <Link to="/services-customs" className="service-fontawesome-icon">
                    <FontAwesomeIcon size="2x" icon={faFileAlt} />
                </Link>
                <Link to="/services-storage" className="service-fontawesome-icon">
                    <FontAwesomeIcon size="2x" icon={faWarehouse} />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorageContent;
