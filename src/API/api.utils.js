import axios from 'axios'

let axiosConfig = {
  baseURL: 'https://roman-task-app.herokuapp.com',
  headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }
};

export const setToken = token => { 
  axios.defaults.headers.common['Authorization'] = '';
  delete axios.defaults.headers.common['Authorization'];

  if (token) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
  }
}

export const getData = async route => {
  try {    
    const response = await axios.get(route, axiosConfig)
    return response
  } catch (error) {
    return error
  }
}
export const postData = async (route, data) => {
  try {
    const response = await axios.post(route, data, axiosConfig)  
    console.log('response', response)
    return response
  } catch (error) {
    return error
  }
}
export const deleteData = async (route, _id) => {
  try {
    const response = await axios.delete(`${route}/${_id}`, axiosConfig)
    return response
  } catch (error) {
    return error
  }
}
export const updateData = async (route, data) => {
  try {
    const _id = data._id
    delete data._id    
    const response = await axios.patch(`${route}/${_id}`, data, axiosConfig)
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