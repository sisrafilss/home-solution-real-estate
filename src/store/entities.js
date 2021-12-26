import { combineReducers } from "redux";

import topProjectsReducer from './topProjects';

export default combineReducers({
    topProjects: topProjectsReducer
})