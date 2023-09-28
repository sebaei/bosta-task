import { combineReducers } from "redux";
import { shipmentReducer } from "./shipmentReducer.ts";
const reducers = combineReducers({
  allShipments: shipmentReducer,
});
export default reducers;
