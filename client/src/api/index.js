import axios from 'axios'

const URL = 'http://localhost:3334'

export const getPosts = () => axios.get(`${URL}/posts`)
export const createPost = payload => axios.post(`${URL}/posts`, payload)
