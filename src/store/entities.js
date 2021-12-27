import { combineReducers } from "redux";

import topProjectsReducer from "./topProjects";
import upcommingProjectsReducer from "./upcommingProjects";
import testimonialReducer from "./testimonials";
import userReducer from "./user";
import flatsReducer from "./flatSale";

export default combineReducers({
  topProjects: topProjectsReducer,
  uocommingProjects: upcommingProjectsReducer,
  testimonials: testimonialReducer,
  user: userReducer,
  saleFlats: flatsReducer
});
