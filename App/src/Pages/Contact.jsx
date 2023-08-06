import React from "react";
import logo from ".././assets/Photos/largeLogo.png";
import "../assets/scss/Contact.scss";

export default function Contact() {
  return (
    <div className="contactContainer">
      <img src={logo} alt="logo" className="contactLogo" />
      <h1 className="TitleContact">CONTACT</h1>

      <p className="infoText">
        Contact Name: Paws and Claws Adoption center Phone: +972-50-555-5555
        Email: info@pawsandclawsadoption.com Address: Shoken St 22, Tel
        Aviv-Yafo
      </p>
      <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27045.745306760506!2d34.77926477910156!3d32.076870800000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bb441ec8ccd%3A0x17918611521e57b1!2sOvad&#39;s%20Sabich!5e0!3m2!1sen!2sil!4v1675617969071!5m2!1sen!2sil"
        className="iframeMap"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>

    </div>
  );
}
