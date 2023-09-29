import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { setShipment } from "../redux/actions/index.ts";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const baseURL = "https://tracking.bosta.co/shipments/track/7234258";

function step2Validator() {
  // return a boolean
}

function step3Validator() {
  // return a boolean
}

function step4Validator() {
  // return a boolean
}

const Status = () => {
  const products = useSelector((state) => state.allShipments.shipment);
  console.log(products);

  const dispatch = useDispatch();
  const [shipment, setSHipmentData] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      dispatch(setShipment(response.data));
      setSHipmentData(response.data);
    });
  }, []);
  const { t, i18n } = useTranslation();

  var currentLanguage = i18n.language;

  // console.log(shipment);
  const dateString = shipment?.CurrentStatus.timestamp;
  const date = new Date(dateString);
  const timestampWithOffset = date.getTime();
  const offset = date.getTimezoneOffset() * 60 * 1000;
  // console.log(offset);
  const timestampWithoutOffset = timestampWithOffset - offset;
  const dateWithoutOffset = new Date(timestampWithoutOffset);
  // console.log(dateWithoutOffset);
  //
  const deliveryDate = shipment?.PromisedDate;
  const indexOfT = deliveryDate?.indexOf("T");
  const dateWithoutTime = dateString?.substring(0, indexOfT);
  const dateobj = new Date(dateWithoutTime);

  let firstStep = t("progressBar.first");
  let secondStep = t("progressBar.second");
  let thirdStep = t("progressBar.third");
  let fourthStep = t("progressBar.fourth");
  return (
    <section>
      <div className="status">
        <div>
          <p>
            {t("status.number")} {shipment?.TrackingNumber}
          </p>
          <p>{shipment?.CurrentStatus.state}</p>
        </div>
        <div>
          <p>{t("status.update")}</p>
          <p>{dateWithoutOffset.toString().slice(0, 24)}</p>
        </div>
        <div>
          <p>{t("status.provider")}</p>
          <p>{shipment?.provider}</p>
        </div>
        <div>
          <p>{t("status.delivery")}</p>
          <p>{dateWithoutTime}</p>
        </div>
      </div>
      {/* Progress bar */}
      <div className={currentLanguage === "ar" ? "bar" : "bar en"}>
        <StepProgressBar
          startingStep={3}
          // onSubmit={onFormSubmit}
          steps={[
            {
              label: firstStep,
              // subtitle: "10%",
              name: "step 1",
            },
            {
              label: secondStep,
              // subtitle: "50%",
              name: "step 2",
            },
            {
              label: thirdStep,
              // subtitle: "50%",
              name: "step 3",
            },
            {
              label: fourthStep,
              // subtitle: "50%",
              name: "step 4",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Status;
