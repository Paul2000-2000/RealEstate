import React from "react";
import "./Contact.css";
import { CiPhone } from "react-icons/ci";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import ContactImage from "../../assests/contactiamge.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-left">
          <h2 className="contact-left-firsth">Our Contact us</h2>
          <h2 className="contact-left-secondh">Easy to contact us</h2>
          <p className="contact-left-desc">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </p>
          <div className="contact-left-contact">
            <div className="contact-left-contact-div">
              <div className="contact-left-contact-div-tho">
                <CiPhone />
                <p>Call</p>
              </div>
              <button className="contact-left-contact-div-but">Call now</button>
            </div>
            <div className="contact-left-contact-div">
              <div className="contact-left-contact-div-tho">
                <IoChatbubbleEllipsesOutline />
                <p>Chat</p>
              </div>
              <button className="contact-left-contact-div-but">Chat now</button>
            </div>
            <div className="contact-left-contact-div">
              <div className="contact-left-contact-div-tho">
                <IoChatbubbleEllipsesOutline />
                <p>Video Call</p>
              </div>
              <button className="contact-left-contact-div-but">
                Video Call now
              </button>
            </div>
            <div className="contact-left-contact-div">
              <div className="contact-left-contact-div-tho">
                <FaMessage />
                <p>Message</p>
              </div>
              <button className="contact-left-contact-div-but">
                Message now
              </button>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <img src={ContactImage} alt="" className="contact-right-img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
