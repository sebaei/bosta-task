import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import { setShipment } from "../redux/actions/index.ts";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const baseURL = "https://tracking.bosta.co/shipments/track/7234258";

const Status = () => {
  const shipment = useSelector((state) => state.allShipments.shipment);
  console.log(shipment.TransitEvents);

  const received = shipment?.TransitEvents?.filter(
    (event) => event?.state === "PACKAGE_RECEIVED"
  );

  console.log(received);

  const outDelivery = shipment?.TransitEvents?.filter(
    (event) => event?.state === "OUT_FOR_DELIVERY"
  );

  console.log(outDelivery);

  const delivered = shipment?.TransitEvents?.filter((event) =>
    event?.state.includes("DELIVERED")
  );

  console.log(delivered);

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
          <p>{shipment?.CurrentStatus?.state}</p>
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
        {shipment?.TrackingNumber ? (
          <StepProgressBar
            startingStep={delivered ? 3 : outDelivery ? 2 : received ? 1 : 0}
            // onSubmit={onFormSubmit}
            steps={[
              {
                label: t("progressBar.first"),
                // subtitle: "10%",
                name: "step 1",
              },
              {
                label: t("progressBar.second"),
                // subtitle: "50%",
                name: "step 2",
              },
              {
                label: t("progressBar.third"),
                // subtitle: "50%",
                name: "step 3",
              },
              {
                label: t("progressBar.fourth"),
                // subtitle: "50%",
                name: "step 4",
              },
            ]}
          />
        ) : (
          <StepProgressBar
            startingStep={0}
            // onSubmit={onFormSubmit}
            steps={[
              {
                label: t("progressBar.first"),
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
        )}
      </div>
    </section>
  );
};

export default Status;
