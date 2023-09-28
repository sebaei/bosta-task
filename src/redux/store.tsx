import { configureStore } from "@reduxjs/toolkit";

import { shipmentReducer } from "./reducers/shipmentReducer.ts";

const store = configureStore({ reducer: shipmentReducer });

export default store;
