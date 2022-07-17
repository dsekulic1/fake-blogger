import axios from 'axios'

export const basicGet = async (url) => {
  return (await axios.get(url)).data
}

export const basicPost = async (url, data) => {
  return (await axios.post(url, data)).data
}

export const basicDelete = async (url) => {
  return (await axios.delete(url)).data
}

export const basicPut = async (url, data) => {
  return (await axios.put(url, data)).data
}
