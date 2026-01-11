// export const mediaEndpoints = {
//   discover: [
//     {
//       type: 'movies',
//       endpoint: '/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc'
//     },
//     {
//       type: 'tv',
//       endpoint: '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
//     }
//   ],
//   trending: [
//     {
//       type: 'movies',
//       movieEndpoint: '/trending/movie/day?language=en-US'
//     },
//     {
//       type: 'tv',
//       tvEndpoint: '/trending/tv/day?language=en-US'
//     }]
// }
export const mediaEndpoints = {
  discover:
    {
      movies: '/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc',
      tv: '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
    },
  trending:
    {
      movies: '/trending/movie/day?language=en-US',
      tv: '/trending/tv/day?language=en-US'
    }
}

export const genresEndpoints = {
  movies: '/genre/movie/list?language=en',
  tv: '/genre/tv/list?language=en'
}
