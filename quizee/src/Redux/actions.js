import * as types from "./actionTypes";
import axios from "axios";

// GET QUIZ
export const getQuiz =
  ({ category, difficulty }) =>
  (dispatch) => {
    console.log(category, difficulty);
    dispatch({ type: types.GET_QUIZ_REQUEST });

    return axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
      )
      .then((res) =>
        dispatch({ type: types.GET_QUIZ_SUCCESS, payload: res.data.results })
      )
      .catch((error) =>
        dispatch({ type: types.GET_QUIZ_FAILURE, payload: error })
      );
  };
