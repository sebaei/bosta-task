import React from "react";
import Contact from "../assets/contact.png";

const Address = () => {
  return (
    <section className="address-contact">
      <div>
        <h4>عنوان التسليم</h4>
        <div className="address">
          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22, Cairo
        </div>
      </div>
      <div className="contact-us">
        <img src={Contact} alt="Need help ?" className="contact-img" />
        <div className="contact-btn">
          <p>هل يوجد مشكلة في شحنتك ؟</p>
          <button>ابلاغ عن مشكلة</button>
        </div>
      </div>
    </section>
  );
};

export default Address;
