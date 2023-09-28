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

  return (
    <section>
      <div className="status">
        <div>
          <p> {shipment?.TrackingNumber}رقم الشحنة</p>
          <p>{shipment?.CurrentStatus.state}</p>
        </div>
        <div>
          <p>اخر تحديث </p>
          <p>{shipment?.CurrentStatus.timestamp}</p>
        </div>
        <div>
          <p>اسم التاجر</p>
          <p>{shipment?.provider}</p>
        </div>
        <div>
          <p>موعد التسليم خلال </p>
          <p>{shipment?.PromisedDate}</p>
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
