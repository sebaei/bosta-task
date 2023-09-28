import { ActionTypes } from "../constants/index.ts";

export const setShipment = (shipment) => {
  return {
    type: ActionTypes.SET_SHIPMENT,
    payload: shipment,
  };
};
