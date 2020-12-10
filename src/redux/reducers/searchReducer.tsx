import {
  FETCH_MOVIE,
  FETCH_MOVIES_LIST,
  SEARCH_MOVIE,
  LOADING,
} from "../actions/types";

const initialState = {
  loading: false,
  moviesList: [] as string[],
  movieSelected: [] as string[],
  search: {
    movies: [] as string[],
    text: "",
    result: 0,
    isSearching: false,
  },
};

interface IReduxGetMoviesAction {
  type: string;
  payload: [];
}

export default function (state = initialState, action: IReduxGetMoviesAction) {
  switch (action.type) {
    case FETCH_MOVIE:
      return {
        ...state,
        movieSelected: action.payload,
        loading: false,
      };
    case FETCH_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.payload,
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
