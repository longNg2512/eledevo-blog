import axios from 'axios'

const URL = 'http://localhost:3334'

export const getPosts = () => axios.get(`${URL}/posts`)
export const createPost = payload => axios.post(`${URL}/posts`, payload)
export const deletePost = payload => axios.delete(`${URL}/posts/${payload}`)
export const updatePost = payload =>
    axios.put(`${URL}/posts/${payload.id}`, payload.data)
