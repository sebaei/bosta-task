import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import "react-step-progress/dist/index.css";
import { useTranslation } from "react-i18next";
import { Delivered, OutDelivery, Received } from "../assets/SVGs.tsx";

const Status = () => {
  var shipment = useSelector((state) => state?.allShipments?.shipment);

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
  const { t, i18n } = useTranslation();

  var currentLanguage = i18n.language === "ar";

  const dateString = shipment?.CurrentStatus?.timestamp;
  const date = new Date(dateString);
  const timestampWithOffset = date.getTime();
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const timestampWithoutOffset = timestampWithOffset - offset;
  const dateWithoutOffset = new Date(timestampWithoutOffset);
  const deliveryDate = shipment?.PromisedDate || shipment?.CreateDate;
  const indexOfT = deliveryDate?.indexOf("T");
  const dateWithoutTime = dateString?.substring(0, indexOfT);

  const currentStateDelivered =
    shipment?.CurrentStatus?.state.includes("DELIVERED");
  const currentStateCancelled =
    shipment?.CurrentStatus?.state.includes("CANCELLED");
  const currentStatePending = !currentStateDelivered && !currentStateCancelled;

  var isCreated = created && created[0] ? true : false;
  var isReceived = received && received[0] ? true : false;
  var isOutDelivery = outDelivery && outDelivery[0] ? true : false;
  var isDelivered = delivered && delivered[0] ? true : false;

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
      <section className="step-wizard">
        <ul className="step-wizard-list">
          <li
            className={`${currentLanguage ? "" : "eng"} ${
              currentStateDelivered
                ? "step-wizard-item"
                : currentStateCancelled
                ? "step-wizard-item cancel"
                : "step-wizard-item pending"
            }`}
          >
            <span
              className={`${
                currentStateDelivered
                  ? "progress-count"
                  : currentStateCancelled
                  ? "progress-count cancel"
                  : "progress-count pending"
              }`}
            >
              1
            </span>
            <span className="progress-label">{t("progressBar.first")}</span>
          </li>
          <li
            className={`${currentLanguage ? "" : "eng"} ${
              currentStateDelivered
                ? "step-wizard-item"
                : currentStateCancelled
                ? "step-wizard-item cancel"
                : "step-wizard-item pending"
            }  ${
              isOutDelivery
                ? ""
                : isReceived
                ? ""
                : isCreated
                ? "current-item"
                : ""
            }`}
          >
            <span
              className={`${currentLanguage ? "" : "eng"} ${
                currentStateDelivered
                  ? "progress-count"
                  : currentStateCancelled
                  ? "progress-count cancel"
                  : "progress-count pending"
              }`}
            >
              <Received />
            </span>
            <span className="progress-label">{t("progressBar.second")}</span>
          </li>
          <li
            className={`${currentLanguage ? "" : "eng"} ${
              currentStateDelivered
                ? "step-wizard-item"
                : currentStateCancelled
                ? "step-wizard-item cancel"
                : "step-wizard-item pending"
            }  ${isOutDelivery ? "" : isReceived ? "current-item" : ""}`}
          >
            <span
              className={`${
                currentStateDelivered
                  ? "progress-count"
                  : currentStateCancelled
                  ? "progress-count cancel"
                  : "progress-count pending"
              }`}
            >
              <OutDelivery />
            </span>
            <span className="progress-label">{t("progressBar.third")}</span>
          </li>
          <li
            className={`${currentLanguage ? "" : "eng"} ${
              currentStateDelivered
                ? "step-wizard-item"
                : currentStateCancelled
                ? "step-wizard-item cancel"
                : "step-wizard-item pending"
            }  ${isDelivered ? "" : isOutDelivery ? "current-item" : ""}`}
          >
            <span
              className={`${
                currentStateDelivered
                  ? "progress-count"
                  : currentStateCancelled
                  ? "progress-count cancel"
                  : "progress-count pending"
              }`}
            >
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
