import { ActionTypes } from "../constants/index.ts";

const intialState = {
  shipment: [],
};

export const shipmentReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_SHIPMENT:
      return { ...state, shipment: payload };
    default:
      return state;
  }
};
