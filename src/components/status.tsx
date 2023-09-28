import React from "react";
import axios from "axios";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

const baseURL = "https://tracking.bosta.co/shipments/track/7234258";

const Status = () => {
  const [shipment, setShipment] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setShipment(response.data);
    });
  }, []);

  console.log(shipment);
  const dateString = shipment?.CurrentStatus.timestamp;
  const date = new Date(dateString);
  const timestampWithOffset = date.getTime();
  const offset = date.getTimezoneOffset() * 60 * 1000;
  console.log(offset);
  const timestampWithoutOffset = timestampWithOffset - offset;
  const dateWithoutOffset = new Date(timestampWithoutOffset);
  console.log(dateWithoutOffset);

  const deliveryDate = shipment?.PromisedDate;
  const indexOfT = deliveryDate?.indexOf("T");
  const dateWithoutTime = dateString?.substring(0, indexOfT);
  const dateobj = new Date(dateWithoutTime);

  return (
    <section>
      <div className="status">
        <div>
          <p> {shipment?.TrackingNumber}رقم الشحنة</p>
          <p>{shipment?.CurrentStatus.state}</p>
        </div>
        <div>
          <p>اخر تحديث </p>
          <p>{dateWithoutOffset.toString().slice(0, 24)}</p>
        </div>
        <div>
          <p>اسم التاجر</p>
          <p>{shipment?.provider}</p>
        </div>
        <div>
          <p>موعد التسليم خلال </p>
          <p>{dateWithoutTime}</p>
        </div>
      </div>
      {/* Progress bar */}
      <ProgressBar
        percent={25}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
            />
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
            />
          )}
        </Step>
        <Step transition="scale" position={25}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
        <Step transition="scale" position={0}>
          {({ accomplished }) => (
            <img
              style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
              width="30"
              src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
            />
          )}
        </Step>
      </ProgressBar>
    </section>
  );
};

export default Status;
