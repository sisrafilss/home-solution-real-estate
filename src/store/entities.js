import { combineReducers } from "redux";

import topProjectsReducer from "./topProjects";
import upcommingProjectsReducer from "./upcommingProjects";
import testimonialReducer from "./testimonials";
import userReducer from "./user";

export default combineReducers({
  topProjects: topProjectsReducer,
  uocommingProjects: upcommingProjectsReducer,
  testimonials: testimonialReducer,
  user: userReducer,
});
