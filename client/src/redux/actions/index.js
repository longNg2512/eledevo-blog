import { createActions, createAction } from 'redux-actions'

export const getType = reduxActions => {
    return reduxActions().type
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: payload => payload,
    getPostsFailure: err => err,
})

export const createPost = createActions({
    createPostRequest: payload => payload,
    createPostSuccess: payload => payload,
    createPostFailure: err => err,
})

export const updatePost = createActions({
    updatePostRequest: payload => payload,
    updatePostSuccess: payload => payload,
    updatePostFailure: err => err,
})

export const showCreateModal = createAction('SHOW_CREATE_POST_MODAL')
export const hideCreateModal = createAction('HIDE_CREATE_POST_MODAL')

export const deleteModal = createActions({
    showDeleteModal: payload => payload,
    hideDeleteModal: undefined,
})

export const deletePost = createActions({
    deletePostRequest: payload => payload,
    deletePostSuccess: undefined,
    deletePostFailure: err => err,
})
