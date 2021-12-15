export const initialState = {
  total: 0,
  bill: 0,
  people: 2,
  tipPercentage: 5,
};

export function reducer(state = initialState, action) {
  const { value } = action;

  switch (action.type) {
    case "UPDATE_BILL": {
      return { ...state, bill: value };
    }
    case "UPDATE_PEOPLE": {
      return { ...state, people: value };
    }
    case "UPDATE_TIP_PERCENTAGE": {
      return { ...state, tipPercentage: value };
    }
    default:
      return state;
  }
}
