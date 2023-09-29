import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShipment } from "../redux/actions/";

const Navbar = () => {
  // const products = useSelector((state) => state.shipment?);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="nav-first">
        <svg
          width="6em"
          height="3em"
          viewBox="0 0 102 62"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          class=""
        >
          <path
            d="M10.0955 10.9068C10.9901 10.9068 11.7355 10.1617 11.7355 9.2675C11.7355 8.37335 10.9901 7.62823 10.0955 7.62823C9.20096 7.62823 8.45549 8.37335 8.45549 9.2675C8.45549 10.1989 9.20096 10.9068 10.0955 10.9068Z"
            fill="#E30613"
          ></path>
          <path
            d="M6.14454 10.9068C7.0391 10.9068 7.78457 10.1617 7.78457 9.2675C7.78457 8.37335 7.0391 7.62823 6.14454 7.62823C5.24998 7.62823 4.50451 8.37335 4.50451 9.2675C4.50451 10.1989 5.24998 10.9068 6.14454 10.9068Z"
            fill="#E30613"
          ></path>
          <path
            d="M67.4219 20.7424H64.3282V12.3225H58.5136C55.4944 12.3225 53.0344 15.1912 53.0344 18.209C53.0344 21.2268 55.4944 23.6857 58.5136 23.6857H61.3464C61.3464 23.9837 61.2718 24.5426 60.7127 24.9524C60.1909 25.3622 58.7372 25.921 55.979 25.2877L55.3453 28.0819C56.4263 28.3427 57.3581 28.4172 58.1781 28.4172C60.2282 28.4172 61.5327 27.7839 62.3155 27.1505C63.3964 26.2936 64.03 24.9896 64.03 23.6112H70.6274V12.248H67.4219V20.7424ZM61.1227 20.7424H59.0727C57.5445 20.7424 56.2772 19.5875 56.2772 18.06C56.2772 16.5325 57.5072 15.2658 59.0727 15.2658H61.1227V20.7424Z"
            fill="#E30613"
          ></path>
          <path
            d="M69.0247 25.0641C68.1301 25.0641 67.3846 25.8093 67.3846 26.7034C67.3846 27.5976 68.1301 28.3427 69.0247 28.3427C69.9192 28.3427 70.6647 27.5976 70.6647 26.7034C70.6647 25.8093 69.9192 25.0641 69.0247 25.0641Z"
            fill="#E30613"
          ></path>
          <path
            d="M47.7043 18.8424C47.7043 19.9228 46.8843 20.7424 45.8034 20.7424C44.7224 20.7424 44.0888 19.9228 44.0888 18.8424V14.1853H40.846V18.7678C40.846 19.8483 39.9515 20.7424 38.8705 20.7424H37.7523V14.1853H34.5095V20.7424H30.484C30.484 20.7424 30.5586 20.6307 30.7077 20.4444C32.0868 18.3953 31.4904 15.3403 29.8131 13.6265C28.5831 12.3598 26.7194 11.7637 25.0048 12.0617C22.5448 12.4715 21.4266 13.9245 19.5257 16.5697V7.62823H16.2829V20.7052H13.1892V12.2853H6.03271C3.05084 12.2853 0.92627 14.6697 0.92627 18.06C0.92627 21.4876 3.31176 23.9837 6.21908 23.9837C7.82183 23.9837 9.05186 23.3876 9.87187 22.2699L9.94641 22.1582L10.5055 23.6484H39.206C40.5105 23.6484 41.666 23.1268 42.5233 22.2699C43.3806 23.1268 44.5361 23.6484 45.8406 23.6484C48.4125 23.6484 50.9471 21.5621 50.9471 18.9914V12.2853H47.7043V18.8424ZM9.94641 18.0972C9.94641 19.9973 8.79094 21.115 7.03909 21.115C5.28725 21.115 4.16904 20.0346 4.16904 18.0972C4.16904 16.1599 5.28725 15.2658 7.03909 15.2658H9.94641V18.0972ZM28.2103 18.06C28.1358 18.4325 27.9867 18.8051 27.7631 19.1777C27.1294 20.2208 25.8994 20.7424 24.6694 20.7424H19.302C19.302 20.7424 20.6066 19.1404 21.3521 18.2835C22.5448 16.905 23.7748 15.2658 25.4521 14.9677C27.3158 14.6697 28.5085 16.4207 28.2103 18.06Z"
            fill="#E30613"
          ></path>
          <path
            d="M110.957 8.33609L96.9424 0.25148C96.3833 -0.0838266 95.6751 -0.0838266 95.116 0.25148L81.1012 8.33609C80.5421 8.67139 80.1694 9.26749 80.1694 9.9381V21.7856C80.1694 22.4562 80.5048 23.0523 81.1012 23.3876L95.116 31.4722C95.4142 31.6213 95.7123 31.733 96.0478 31.733C96.3833 31.733 96.6815 31.6585 96.9796 31.4722L110.994 23.3876C111.554 23.0523 111.926 22.4562 111.926 21.7856V9.9381C111.889 9.26749 111.516 8.67139 110.957 8.33609ZM108.646 18.8424L103.465 15.8619L108.646 12.8814V18.8424ZM96.0105 3.45551L107.23 9.9381L96.0105 16.4207L84.7913 9.9381L96.0105 3.45551ZM83.4122 12.8441L88.5931 15.8246L83.4122 18.8051V12.8441ZM96.0105 28.2309L84.7913 21.7483L91.7987 17.6874L95.0787 19.5875C95.3769 19.7365 95.6751 19.8483 96.0105 19.8483C96.346 19.8483 96.6442 19.7738 96.9424 19.5875L100.222 17.6874L107.23 21.7483L96.0105 28.2309Z"
            fill="#E30613"
          ></path>
        </svg>
      </div>
      <div className="nav-mid">
        <h4>الرئيسية</h4>
        <h4>الأسعار</h4>
        <h4>كلم المبيعات</h4>
      </div>
      <div className="nav-last">
        <h4>تتبع شحنتك</h4>
        <h4>تسجيل الدخول</h4>
        <h4 className="switch-lang">ENG</h4>
      </div>
    </div>
  );
};

export default Navbar;
