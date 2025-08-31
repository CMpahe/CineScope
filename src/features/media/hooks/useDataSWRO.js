// ---- ---- ---- ---- CUSTOM HOOKS ---- ---- ---- ----
import { useFetchMediaData } from '../services/useFetchMediaData'
import { useFetchGenresData } from '../services/useFecthGenresData'
import { hash } from '../../../utils/hash'
//
//
//

export const useDataSWRO = (updateState, cacheItemName, endPoints) => {
  const TTL = 5 * 60 * 1000 // 5 minutes
  const cached = JSON.parse(window.localStorage.getItem(cacheItemName)) // retrive the data from cache
  const now = Date.now()

  // 1. Show the cache if it exist and is not expired
  if (cached?.data) { // Check whether there is any data saved in the localStorage
    updateState(cached.data)
  }

  // 2. Dicide whether to revalidate
  const mustRevalidate = !cached || now - cached.savedAt > TTL

  if (cacheItemName === 'media_data' && mustRevalidate) {
    useFetchMediaData(endPoints).then(res => {
      const freshHash = hash(res)
      const changed = !cached || cached.hash !== freshHash

      if (changed) {
        updateState(res)
      }

      window.localStorage.setItem(cacheItemName, JSON.stringify({
        data: res,
        savedAt: now,
        hash: freshHash
      }))
    })
  } else if (mustRevalidate) {
    useFetchGenresData(endPoints).then(res => {
      const freshHash = hash(res)
      const changed = !cached || cached.hash !== freshHash

      if (changed) {
        updateState(res)
      }
      window.localStorage.setItem(cacheItemName, JSON.stringify({
        data: res,
        savedAt: now,
        hash: freshHash
      }))
    })
  }
}

//
// ---- ---- ---- ---- DOCUMENTATION ---- ---- ---- ----
//

// This hook is intended to call the API and save the data within the localstorage. Once it is executed it evaluate whether there any data saved, if it is not then it calls the API and retrieves new data.

// - updateState -> This prop is a method to update a state outside the hook. This state holds the information retrieve from the API.

// - cacheItemName -> This prop contains the name with which will be set the Item in the localStorage.

// - endPoints -> This contains the endPoitns information necesary to call the API and it is passed to 'useFetchMediaData' to handle the API fetch.
