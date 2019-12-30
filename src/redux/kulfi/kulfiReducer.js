import { BUY_KULFI } from './kulfiTypes';

const initialState = {
  numOfKulfis: 15
}

const kulfiReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_KULFI:
      return {
        ...state,
        numOfKulfis: state.numOfKulfis - 1
      }
    default: return state;
  }
}

export default kulfiReducer;