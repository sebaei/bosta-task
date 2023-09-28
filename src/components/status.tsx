import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";

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

const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;
const step4Content = <h1>STep 4 Content</h1>;

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
          <p>رقم الشحنة{shipment?.TrackingNumber}</p>
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
      <StepProgressBar
        startingStep={0}
        //e2fel teansition
        // onSubmit={onFormSubmit}
        steps={[
          {
            label: "Step 1",
            subtitle: "10%",
            name: "step 1",
            content: step1Content,
          },
          {
            label: "Step 2",
            subtitle: "50%",
            name: "step 2",
            content: step2Content,
          },
          {
            label: "Step 3",
            subtitle: "50%",
            name: "step 3",
            content: step3Content,
          },
          {
            label: "Step 4",
            subtitle: "50%",
            name: "step 4",
            content: step4Content,
          },
        ]}
      />
      ;
    </section>
  );
};

export default Status;
