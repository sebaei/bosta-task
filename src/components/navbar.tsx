import React from "react";

const Navbar = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="nav-first">
        <h3>بوسطة</h3>
      </div>
      <div className="nav-mid">
        <h4>الرئيسية</h4>
        <h4>الأسعار</h4>
        <h4>كلم المبيعات</h4>
      </div>
      <div className="nav-last">
        <h4>تتبع شحنتك</h4>
        <h4>تسجيل الدخول</h4>
        <h4>ENG</h4>
      </div>
    </div>
  );
};

export default Navbar;
