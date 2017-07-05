import {
  DO_SOMETHING,
} from '../actions/application';

const initialState = {
  isDoingSomething: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_SOMETHING:
      return {
        ...state,
        isDoingSomething: true,
      };

    default:
      return state;
  }
};

export default reducer;
