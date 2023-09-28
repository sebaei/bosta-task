import { ActionTypes } from "../constants";

export const setShipment = (shipment) => {
  return {
    type: ActionTypes.SET_SHIPMENT,
    payload: shipment,
  };
};
