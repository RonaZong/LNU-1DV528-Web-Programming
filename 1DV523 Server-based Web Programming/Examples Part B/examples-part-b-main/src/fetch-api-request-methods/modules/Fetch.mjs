/**
 * Fetch API related functions.
 */

/**
 * Do a fetch GET request and return the response as JSON.
 *
 * @param {string} url To send request to.
 * @returns {object} The JSON response.
 */
export async function get (url) {
  // Do a fetch request on that url using await
  const response = await fetch(url)

  // Get the response as json (asynchronous request)
  const data = await response.json()

  // Check if status is ok
  if (!response.ok) {
    console.log(response)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return data
}

/**
 * Do a fetch POST request and return the response as JSON.
 *
 * @param {string} url To send request to.
 * @param {object} body To submit.
 * @returns {object} The JSON response.
 */
export async function post (url, body = null) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(url, options)

  const data = await response.json()

  // Check if status is ok
  if (!response.ok) {
    console.log(response)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return data
}

/**
 * Do a fetch PUT request and return the response as JSON.
 *
 * @param {string} url To send request to.
 * @param {object} body To submit.
 * @returns {object} The JSON response.
 */
export async function put (url, body = null) {
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(url, options)

  const data = await response.json()

  // Check if status is ok
  if (!response.ok) {
    console.log(response)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return data
}

/**
 * Do a fetch PATCH request and return the response as JSON.
 *
 * @param {string} url To send request to.
 * @param {object} body To submit.
 * @returns {object} The JSON response.
 */
export async function patch (url, body = null) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(url, options)

  const data = await response.json()

  // Check if status is ok
  if (!response.ok) {
    console.log(response)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return data
}

/**
 * Do a fetch DELETE request and return the response as JSON.
 *
 * @param {string} url To send request to.
 * @param {object} body To submit.
 * @returns {object} The JSON response.
 */
export async function del (url, body = null) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
  const response = await fetch(url, options)

  const data = await response.json()

  // Check if status is ok
  if (!response.ok) {
    console.log(response)
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  return data
}
