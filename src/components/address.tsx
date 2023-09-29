import React from "react";
import Contact from "../assets/contact.png";
import { useTranslation } from "react-i18next";

const Address = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="address-contact">
      <div>
        <h4>{t("address")}</h4>
        <div className="address">
          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22, Cairo
        </div>
      </div>
      <div className="contact-us">
        <img src={Contact} alt="Need help ?" className="contact-img" />
        <div className="contact-btn">
          <p>{t("contact.message")}</p>
          <button>{t("contact.button")}</button>
        </div>
      </div>
    </section>
  );
};

export default Address;
