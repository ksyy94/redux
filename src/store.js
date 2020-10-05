//액션

const INCREMENT = "INCREMENT";
//실수 할수 있기 때문에 위에 선언해준다.

export const increase = (size) => {
  return { type: INCREMENT, size: size };
};

export const decrease = (size) => {
  return { type: "DECREMENT", size: size };
};

const initstate = {
  number: 0,
};

//(state. action)
const reducer = (state = initstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { number: state.number + action.size };
    case "DECREMENT":
      return { number: state.number - action.size };
    default:
      return state;
  }
};

export default reducer;
