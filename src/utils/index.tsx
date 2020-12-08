import { useSelector } from "react-redux";

export const getCurrentState = () =>
  useSelector((state) => state.moviesStore, []) || [];

export const getMovieCategories = (movies) => {
  const moviesReduced = movies.reduce((accumulator, obj) => {
    return [...accumulator, ...obj.genres];
  }, []);

  return moviesReduced.filter((v, i) => moviesReduced.indexOf(v) === i);
};

export const filterMoviesByCategory = (categories, movies) => {
  let groupCategories = [];
  categories.map((category) => {
    return movies.map((movie) => {
      if (movie.genres.includes(category)) {
        groupCategories.push({ category, movie });
      }
    });
  });
  return groupCategories;
};

export const groupByCategoryReduced = (moviesGroup) =>
  moviesGroup.reduce(
    (r, item) => {
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
