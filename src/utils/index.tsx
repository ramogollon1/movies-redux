import { useSelector } from "react-redux";

export const getCurrentState = () =>
  useSelector((state: any) => state.moviesStore, []) || [];

export const getMovieCategories = (movies: []) => {
  if (!movies) return;
  const moviesReduced = movies.reduce((accumulator: [], obj: any) => {
    return [...accumulator, ...obj.genres];
  }, []);

  return moviesReduced.filter(
    (v: [], i: number) => moviesReduced.indexOf(v) === i
  );
};

export const filterMoviesByCategory = (
  categories: string[],
  movies: []
): [] => {
  if (!categories || !movies.length) return;
  let groupCategories: any = [];
  categories.forEach((category: string) => {
    movies.forEach((movie: any) => {
      const genres = movie.genres;
      if (genres.includes(category)) {
        groupCategories.push({ category, movie });
      }
    });
  });
  return groupCategories;
};

export const groupByCategoryReduced = (moviesGroup: []): [] => {
  if (!moviesGroup) return;
  return moviesGroup.reduce(
    (r: any, item: { category: string; movie: [] }) => {
      let current = r.hash[item.category];
      if (!current) {
        current = r.hash[item.category] = {
          category: item.category,
          items: [],
        };
        r.arr.push(current);
      }
      current.items.push(item.movie);
      return r;
    },
    { hash: {}, arr: [] }
  ).arr;
};

export const getMovieYear = (date: string) => new Date(date).getFullYear();
