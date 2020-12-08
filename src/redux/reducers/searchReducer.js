import { FETCH_MOVIE, SEARCH_MOVIE, LOADING } from "../actions/types";

const initialState = {
  loading: false,
  search: [],
  movieSelected: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        movieSelected: action.payload,
        loading: false,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        search: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
