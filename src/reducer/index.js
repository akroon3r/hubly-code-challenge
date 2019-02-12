export let initialState = {
}

function Reducer(state=initialState, action) {
  switch (action.type) {
    case 'SHUFFLE':
      return  Object.assign(
        { },
        state,
        { }
      );
    default:
      return state;
  }
}

export default Reducer
