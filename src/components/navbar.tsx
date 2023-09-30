import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShipment } from "../redux/actions/index.ts";
import { useTranslation } from "react-i18next";
import { BostaAR, BostaEN, Magnify } from "../assets/SVGs.tsx";
import axios from "axios";

const locales = {
  en: { title: "ENG" },
  ar: { title: "AR" },
};

const Navbar = () => {
  // const products = useSelector((state) => state.shipment?);
  const [track, setTrack] = useState("");

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  var currentLanguage = i18n.language;
  var currentDir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentDir;

  useEffect(() => {
    var firstURl = `https://tracking.bosta.co/shipments/track/7234258`;

    axios.get(firstURl).then((response) => {
      dispatch(setShipment(response.data));
    });
  }, []);

  function getShipment(track) {
    var baseURL = `https://tracking.bosta.co/shipments/track/${track}`;

    axios.get(baseURL).then((response) => {
      dispatch(setShipment(response.data));
    });
  }

  return (
    <div className="navbar">
      <div className="nav-first">
        {currentLanguage === "ar" ? <BostaAR /> : <BostaEN />}
      </div>
      <div className="nav-mid">
        <h4>{t("navMid.first")}</h4>
        <h4>{t("navMid.second")}</h4>
        <h4>{t("navMid.third")}</h4>
      </div>
      <div className="nav-last">
        <div className="dropdown">
          <h4>{t("navLast.first")}</h4>
          <div className="dropdown-content">
            <h4 className="search-btn">{t("navLast.first")}</h4>
            <div className="search">
              <input
                type="text"
                placeholder={t("navLast.track")}
                value={track}
                className="search-input"
                onChange={(e) => setTrack(e.target.value)}
              />
              <span
                className={currentLanguage === "ar" ? "icon" : "icon en"}
                onClick={() => getShipment(track)}
              >
                <Magnify />
              </span>
            </div>
          </div>
        </div>
        <h4>{t("navLast.second")}</h4>
        {/* <div className="dropdown"> */}
        <h4
          className="switch-lang"
          onClick={
            currentLanguage === "en"
              ? () => i18n.changeLanguage("ar")
              : () => i18n.changeLanguage("en")
          }
        >
          {i18n.language === "ar" ? "ENG" : "عربي"}
        </h4>
        {/* <div className="dropdown-content">
            <h4 onClick={() => i18n.changeLanguage("ar")}>AR</h4>
            <h4 onClick={() => i18n.changeLanguage("en")}>ENG</h4>
          </div> */}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;
