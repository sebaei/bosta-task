import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { setShipment } from "../redux/actions/index.ts";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { Delivered, OutDelivery, Received } from "../assets/SVGs.tsx";

const baseURL = "https://tracking.bosta.co/shipments/track/7234258";

const Status = () => {
  var shipment = useSelector((state) => state.allShipments.shipment);

  var created = shipment?.TransitEvents?.filter(
    (event) => event?.state === "TICKET_CREATED"
  );

  var received = shipment?.TransitEvents?.filter(
    (event) => event?.state === "PACKAGE_RECEIVED"
  );
  var outDelivery = shipment?.TransitEvents?.filter(
    (event) => event?.state === "OUT_FOR_DELIVERY"
  );
  var delivered = shipment?.TransitEvents?.filter((event) =>
    event?.state.includes("DELIVERED")
  );

  console.log(created);
  console.log(received);

  // const dispatch = useDispatch();
  // const [shipment, setSHipmentData] = React.useState(null);
  // React.useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     dispatch(setShipment(response.data));
  //     setSHipmentData(response.data);
  //   });
  // }, []);
  const { t, i18n } = useTranslation();

  var currentLanguage = i18n.language;

  const dateString = shipment?.CurrentStatus?.timestamp;
  const date = new Date(dateString);
  const timestampWithOffset = date.getTime();
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const timestampWithoutOffset = timestampWithOffset - offset;
  const dateWithoutOffset = new Date(timestampWithoutOffset);
  //
  const deliveryDate = shipment?.PromisedDate || shipment?.CreateDate;
  const indexOfT = deliveryDate?.indexOf("T");
  const dateWithoutTime = dateString?.substring(0, indexOfT);
  const dateobj = new Date(dateWithoutTime);

  let firstStep = t("progressBar.first");
  let secondStep = t("progressBar.second");
  let thirdStep = t("progressBar.third");
  let fourthStep = t("progressBar.fourth");
  const currentStateDelivered =
    shipment?.CurrentStatus?.state.includes("DELIVERED");
  const currentStateCancelled =
    shipment?.CurrentStatus?.state.includes("CANCELLED");
  const currentStatePending = !currentStateDelivered && !currentStateCancelled;

  return (
    <section>
      <div className="status">
        <div>
          <p className="status-header">
            {t("status.number")} {shipment?.TrackingNumber}
          </p>
          <p
            className={
              currentStateDelivered
                ? "text-green"
                : currentStateCancelled
                ? "text-red"
                : "text-yellow"
            }
          >
            {currentStateDelivered
              ? t("status.delivered")
              : currentStateCancelled
              ? t("status.cancelled")
              : t("status.pending")}{" "}
          </p>
        </div>
        <div>
          <p className="status-header">{t("status.update")}</p>
          <p>{dateWithoutOffset.toString().slice(0, 24)}</p>
        </div>
        <div>
          <p className="status-header">{t("status.provider")}</p>
          <p>{shipment?.provider}</p>
        </div>
        <div>
          <p className="status-header">{t("status.delivery")}</p>
          <p>{dateWithoutTime}</p>
        </div>
      </div>
      {/* Progress bar */}
      {/* <div className={currentLanguage === "ar" ? "bar" : "bar en"}>
        {shipment?.TrackingNumber ? (
          <StepProgressBar
            startingStep={delivered ? 3 : outDelivery ? 2 : received ? 1 : 0}
            // onSubmit={onFormSubmit}
            steps={[
              {
                label: t("progressBar.first"),
                name: "step 1",
                content: "step 1",
              },
              {
                label: t("progressBar.second"),
                name: "step 2",
                content: "step 2",
              },
              {
                label: t("progressBar.third"),
                name: "step 3",
                content: "step 3",
              },
              {
                label: t("progressBar.fourth"),
                name: "step 4",
                content: "step 4",
              },
            ]}
          />
        ) : (
          <div className="enter-text">Enter number to track shipment</div>
        )}
      </div> */}

      <section className="step-wizard">
        <ul className="step-wizard-list">
          <li className={`step-wizard-item`}>
            <span className="progress-count">1</span>
            <span className="progress-label">{t("progressBar.first")}</span>
          </li>
          <li
            className={`step-wizard-item  ${
              outDelivery[0]
                ? ""
                : received[0]
                ? ""
                : created[0]
                ? "current-item"
                : ""
            }`}
          >
            <span className="progress-count">
              <Received />
            </span>
            <span className="progress-label">{t("progressBar.second")}</span>
          </li>
          <li
            className={`step-wizard-item  ${
              outDelivery[0] ? "" : received[0] ? "current-item" : ""
            }`}
          >
            <span className="progress-count">
              <OutDelivery />
            </span>
            <span className="progress-label">{t("progressBar.third")}</span>
          </li>
          <li
            className={`step-wizard-item  ${
              delivered[0] ? "" : outDelivery[0] ? "current-item" : ""
            }`}
          >
            <span className="progress-count">
              <Delivered />
            </span>
            <span className="progress-label">{t("progressBar.fourth")}</span>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Status;
