import { combineReducers } from "redux";
import colorFix from "./colorFix";
import colorPickerHandle from "./colorPickerHandle";

const rootReducer = combineReducers({
  colorFix,
  colorPickerHandle
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
