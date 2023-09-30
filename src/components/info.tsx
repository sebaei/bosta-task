import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Info = () => {
  const { t, i18n } = useTranslation();

  const shipment = useSelector((state) => state.allShipments.shipment);
  console.log(shipment);

  const created = shipment?.TransitEvents?.filter(
    (event) => event?.state === "TICKET_CREATED"
  );
  console.log("HIHI");

  console.log(created);

  let createdTimestamp = created ? created[0]?.timestamp : null;
  console.log(createdTimestamp);

  let indexOfT = createdTimestamp?.indexOf("T");
  let createdDate = createdTimestamp?.substring(0, indexOfT);
  let createdTime = createdTimestamp?.substring(indexOfT + 1, indexOfT + 6);
  // let [createdDate, createdTime] = createdTimestamp
  //   ? createdTimestamp.split("T")
  //   : null;
  // createdTime = createdTime?.substring(0, 5);

  let received = shipment?.TransitEvents?.filter(
    (event) => event?.state === "PACKAGE_RECEIVED"
  );

  console.log("HI22222");
  console.log(received);

  let lastReceived = received ? received[received?.length - 1] : null;
  let updateReceivedTime = lastReceived?.timestamp;

  console.log(updateReceivedTime);

  let indexOfReceivedT = updateReceivedTime?.indexOf("T");
  let receivedDate = updateReceivedTime?.substring(0, indexOfReceivedT);
  let receivedTime = updateReceivedTime?.substring(
    indexOfReceivedT + 1,
    indexOfReceivedT + 6
  );
  // let [receivedDate, receivedTime] = updateReceivedTime?.split("T");
  // receivedTime = receivedTime?.substring(0, 5);

  const outDelivery = shipment?.TransitEvents?.filter(
    (event) => event?.state === "OUT_FOR_DELIVERY"
  );
  let lastOutDelivery = outDelivery
    ? outDelivery[outDelivery?.length - 1]
    : null;
  let updateOutTime = lastOutDelivery?.timestamp;

  let indexOfOutT = updateOutTime?.indexOf("T");
  let outDate = updateOutTime?.substring(0, indexOfOutT);
  let outTime = updateOutTime?.substring(
    indexOfReceivedT + 1,
    indexOfReceivedT + 6
  );

  // let [outDate, outTime] = updateOutTime?.split("T");
  // outTime = outTime?.substring(0, 5);

  const delivered = shipment?.TransitEvents?.filter((event) =>
    event?.state.includes("DELIVERED")
  );
  // const deliveredTimestamp = delivered[0]?.timestamp;
  let deliveredTimestamp = delivered ? delivered[0]?.timestamp : null;

  let indexOfDeliveredT = deliveredTimestamp?.indexOf("T");
  let deliveredDate = deliveredTimestamp?.substring(0, indexOfDeliveredT);
  let deliveredTime = deliveredTimestamp?.substring(
    indexOfDeliveredT + 1,
    indexOfDeliveredT + 6
  );

  // let [deliveredDate, deliveredTime] = deliveredTimestamp?.split("T");
  // deliveredTime = deliveredTime?.substring(0, 5);

  return (
    <div className="details-table">
      <h4>{t("table.title")}</h4>
      <table>
        <thead>
          <tr>
            <th>{t("table.header.firstCol")}</th>
            <th>{t("table.header.secondCol")}</th>
            <th>{t("table.header.thirdCol")}</th>
            <th>{t("table.header.fourthCol")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>مدينة نصر</td>
            <td>{createdDate}</td>
            <td>{createdTime}</td>
            <td>{t("progressBar.first")}</td>
          </tr>
          {received[0] && (
            <tr>
              <td>مدينة نصر</td>
              <td>{receivedDate}</td>
              <td>{receivedTime}</td>
              <td>{t("progressBar.second")}</td>
            </tr>
          )}
          {outDelivery[0] && (
            <tr>
              <td>مدينة نصر</td>
              <td>{outDate}</td>
              <td>{outTime}</td>
              <td>{t("progressBar.third")}</td>
            </tr>
          )}
          {delivered[0] && (
            <tr>
              <td>مدينة نصر</td>
              <td>{deliveredDate}</td>
              <td>{deliveredTime}</td>
              <td>{t("progressBar.fourth")}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Info;
