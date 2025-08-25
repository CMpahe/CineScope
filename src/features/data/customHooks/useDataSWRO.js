// ---- ---- ---- ---- CUSTOM HOOKS ---- ---- ---- ----
import { useFetchMediaData } from '../../../customHooks/useFetchMediaData'
//
//
//

export const useDataSWRO = (updateState, cacheItemName, endPoints) => {
  const cachedData = window.localStorage.getItem(cacheItemName)
  if (cachedData) { // Check whether there is any data saved in the localStorage
    updateState(JSON.parse(cachedData))
  } else {
    useFetchMediaData(endPoints).then(res => { // Call the API if not
      if (res) {
        updateState(res)
        window.localStorage.setItem(cacheItemName, JSON.stringify(res))
      }
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
