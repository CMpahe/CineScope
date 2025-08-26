// ---- ---- ---- ----  HOOKS  ---- ---- ---- ----
import { useState, useEffect } from 'react'
// ---- ---- ---- ----  LOGIC  ---- ---- ---- ----
import { sortData } from '../utils/sortData'
//
//
//

export const useSortDataByGenre = (formattedData, formattedGenres) => {
  const [sortedMedia, setSortedMedia] = useState({})

  useEffect(() => {
    if (formattedData !== null && formattedGenres !== null) { // Check the data received
      const result = sortData(formattedData, formattedGenres) // Organize data by genre
      setSortedMedia(result)
    }
  }, [formattedData, formattedGenres])

  return sortedMedia // Return the data organized if everything went well
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This hook is intended to received and object with two categories (movies, tv) and another one with the genres also divided into categories (movies, tv). It uses the genres object and organize the first object into categories according to the genres, returning a fully organize object by genre.

// - formattedData -> This prop contains the data without organized.

// - formattedGenres -> This one contains the genres object used to organized the first one.
