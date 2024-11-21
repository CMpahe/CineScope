export const getData = async (endpoint) => {
  const TOKEN = import.meta.env.VITE_REACT_APP_TOKEN

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`
    }
  }
  console.log('Hello I am here! tranqui ya entre')
  try {
    if (endpoint === undefined || endpoint === null) {
      throw new Error('Invalid endpoint value, you are passing an undifined or null')
    }

    const response = await fetch(`https://api.themoviedb.org/3${endpoint}`, options)

    // Validate the status of the response
    if (response < 200 || response >= 300) {
      throw new Error(`Unexpected status code: ${response.status}`)
    }
    console.log('Response from the API:', response) // to check the response from the API

    const contentType = response.headers.get('Content-Type')

    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not in json format')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return null
  }
}
