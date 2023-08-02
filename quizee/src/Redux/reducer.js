import * as types from "./actionTypes";

const initialState = {
  quizes: [],
  isError: false,
  isLoading: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_QUIZ_REQUEST:
      return { ...oldState, isLoading: true };
    case types.GET_QUIZ_SUCCESS:
      return { ...oldState, isLoading: false, quizes: payload };
    case types.GET_QUIZ_FAILURE:
      return { ...oldState, isLoading: false, isError: true };
  }
};

export default reducer;
