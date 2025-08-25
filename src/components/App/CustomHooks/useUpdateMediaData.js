import { useEffect } from 'react'

// Updated media to be displayed
export const useUpdateMediaData = (moviesWithGenres, tvWithGenres, setMedia) => {
  return useEffect(() => {
    if (moviesWithGenres !== null && tvWithGenres !== null) { // Check whether Movies and Tv data is not null.
      setMedia({ movies: moviesWithGenres, tv: tvWithGenres })
    }
  }, [moviesWithGenres, tvWithGenres]) // Execute the useEffect when any of this dependencies changes.
}

// useUpdateMediaData: This hooks requires the movie and tv objects already set with their genres in order to work properly.

// Its main function is to update the movies and tv data that will be used in the main sections to display the medias.
// If this data change in any form, by adding more movies or removing any, this hook will detect it and update the data so all the main components within the App component will work with the latest data available.
