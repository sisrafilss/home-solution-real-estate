import { combineReducers } from "redux";

import topProjectsReducer from "./topProjects";
import upcommingProjectsReducer from "./upcommingProjects";
import testimonialReducer from "./testimonials";
import userReducer from "./user";
import flatsReducer from "./flatSale";
import orderReducer from './orders';

export default combineReducers({
  topProjects: topProjectsReducer,
  uocommingProjects: upcommingProjectsReducer,
  testimonials: testimonialReducer,
  user: userReducer,
  saleFlats: flatsReducer,
  orders: orderReducer,
});
