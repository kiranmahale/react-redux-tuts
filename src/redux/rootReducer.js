import { combineReducers } from 'redux';
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import kulfiReducer from "./kulfi/kulfiReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  kulfi: kulfiReducer
})

export default rootReducer;