import axios from 'axios'

export const setToken = token => {  
  axios.defaults.headers.common['Authorization'] = '';
  delete axios.defaults.headers.common['Authorization'];

  if (token) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
  }
}

export const getData = async route => {
  try {    
    const response = await axios.get(route)
    return response
  } catch (error) {
    return error
  }
}
export const postData = async (route, data) => {
  try {
    const response = await axios.post(route, data)    
    return response
  } catch (error) {
    return error
  }
}
export const deleteData = async (route, _id) => {
  try {
    const response = await axios.delete(`${route}/${_id}`)
    return response
  } catch (error) {
    return error
  }
}
export const updateData = async (route, data) => {
  try {
    const _id = data._id
    delete data._id    
    const response = await axios.patch(`${route}/${_id}`, data)
    return response
  } catch (error) {
    return error
  }
}

// TEST FUNC
// const showData = async () => {
//   try {
//     const data = await getData('/google/auth')
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// showData()