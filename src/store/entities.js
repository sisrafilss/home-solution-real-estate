import { combineReducers } from "redux";

import topProjectsReducer from "./topProjects";
import upcommingProjectsReducer from "./upcommingProjects";
import testimonialReducer from "./testimonials";
import userReducer from "./user";
import flatsReducer from "./flatSale";
import orderReducer from "./orders";
import rentedFlatsReducer from "./rentedFlats";
import userDashboardReducer from "./userDashboard";
import adminDashboardReducer from "./adminDashboard";

export default combineReducers({
  topProjects: topProjectsReducer,
  uocommingProjects: upcommingProjectsReducer,
  testimonials: testimonialReducer,
  user: userReducer,
  saleFlats: flatsReducer,
  orders: orderReducer,
  rentedFlats: rentedFlatsReducer,
  userDashboard: userDashboardReducer,
  adminDashboard: adminDashboardReducer,
});
