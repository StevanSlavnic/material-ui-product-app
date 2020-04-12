import axios from 'axios'

const apiRequest = async request => {
  request.method = request.method || 'get'
  request.url = `${process.env.REACT_APP_DOMAIN}/${request.url}`
  request.data = request.data || {}
  if (request.data && request.method === 'get') {
    // If data is set the get request won't be made
    request.data = null
  }

  return axios(request)
}

export default apiRequest
