import { INIT_STATE } from '../../constant'
import { getType, getPosts, createPost } from '../actions'

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: false,
            }
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case getType(getPosts.getPostsFailure):
            return {
                ...state,
                isLoading: false,
            }
        case getType(createPost.createPostRequest):
            return {
                ...state,
                isLoading: true,
            }
        case getType(createPost.createPostSuccess):
            return {
                isLoading: false,
                data: [...state.data, action.payload],
            }
        case getType(createPost.createPostFailure):
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}
