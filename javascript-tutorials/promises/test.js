const superHeros = ["Iron Man", "Thor", "Hulk"];
// APIS
// const getMovies = (superHeros,callback)=>{
//     const movies = superHeros.map((superHero)=>{
//         return `${superHero} Movie`
//     })
//     return callback(movies);
// }

const getMovies = (superHeros) => {
  return new Promise((resolve, reject) => {
    const movies = superHeros.map((superHero) => {
      return `${superHero} Movie`;
    });
    if (movies.length !== 0) {
      resolve(movies);
    } else {
      reject();
    }
  });
};

const getMoviesData = (movies) => {
  return movies.map((movie) => `IMDB: ${movie}`);
};
// const moviesData = getMovies(superHeros, (movies) => {
//   return getMoviesData(movies);
// });

const promise = getMovies(superHeros);
promise.then((movies) => {
  console.log(getMoviesData(movies));
});

// const moviesData = getMoviesData(movies)
// console.log(moviesData);
const GITHUB_API = "https://api.github.com/users/tush-tr/repos"
const repos = fetch(GITHUB_API);
repos.then((result)=>{
    return result.json()
}).then((result)=>{
    result.forEach((repo)=>{
        console.log(repo.name)
    })
})

const getApiData = async (url)=>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

}
getApiData(GITHUB_API)