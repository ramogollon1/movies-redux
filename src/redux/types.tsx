export type AppState = {
  moviesStore: {
    loading: boolean;
    moviesList: [];
    movieSelected: {
      backdrop: string;
      cast: [];
      classification: string;
      director: string;
      genres: [];
      id: string;
      imdb_rating: number;
      length: string;
      overview: string;
      poster: string;
      released_on: string;
      slug: string;
      title: string;
    };
    search: {
      movies: [];
      text: string;
      result: number;
      isSearching: false;
    };
  };
};
