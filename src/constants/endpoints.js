export const mediaEndpoints = {
  discover: [
    {
      type: 'movies',
      endpoint: '/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc'
    },
    {
      type: 'tv',
      endpoint: '/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
    }
  ],
  trending: [
    {
      type: 'movies',
      endpoint: '/trending/movie/day?language=en-US'
    },
    {
      type: 'tv',
      endpoint: '/trending/tv/day?language=en-US'
    }]
}

export const genresEndpoints = {
  moviesGenresEndpoint: '/genre/movie/list?language=en',
  tvGenresEndpoint: '/genre/tv/list?language=en'
}
