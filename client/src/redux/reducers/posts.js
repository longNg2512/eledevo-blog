import { INIT_STATE } from '../../constant'
import { getType, getPosts, createPost, deletePost } from '../actions'

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {
        case getType(getPosts.getPostsRequest):
        case getType(createPost.createPostRequest):
        case getType(deletePost.deletePostRequest):
            return {
                ...state,
                isLoading: true,
                dataFetched: false,
                error: false,
            }
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                dataFetched: true,
                error: false,
            }
        case getType(createPost.createPostSuccess):
        case getType(deletePost.deletePostSuccess):
            return {
                ...state,
                isLoading: false,
                dataFetched: false,
                error: false,
            }
        case getType(getPosts.getPostsFailure):
        case getType(createPost.createPostFailure):
        case getType(deletePost.deletePostFailure):
            return {
                ...state,
                isLoading: false,
                dataFetched: false,
                error: true,
            }

        default:
            return state
    }
}
