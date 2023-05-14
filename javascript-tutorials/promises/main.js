// const superHeros = ["Iron Man", "Thor", "Hulk"];
// // API
// // const getMovies = (superHeros,callback)=>{
// //     const movies = superHeros.map((superHero)=>{
// //         return `${superHero} Movie`
// //     })
// //     return callback(movies)
// // }
// const getMovies = (superHeros) => {
//   return new Promise((resolve, reject) => {
//     const movies = superHeros.map((superHero) => {
//       return `${superHero} Movie`;
//     });
//     if (movies.length !== 0) {
//       resolve(movies);
//     } else {
//       reject();
//     }
//   });
// };
// const getMoviesData = (movies) => {
//   return movies.map((movie) => `IMDB: ${movie}`);
// };
// // ______
// const promise = getMovies(superHeros);
// //  {data: undefined} 
// // after 2 seconds
// // {data: data}
// promise.then((movies)=>{
//     console.log(getMoviesData(movies))
// })



// const moviesData = getMovies(superHeros,(movies)=>{
//     return getMoviesData(movies)
// }); // 2 seconds
// console.log(moviesData)
const GITHUB_API = "https://api.github.com/users/tush-tr/repos"
// const repos = fetch(GITHUB_API);
// repos.then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data)
// })

const getApiData = async (url)=>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
const apiData = getApiData(GITHUB_API)
apiData.then((data)=>console.log(data))