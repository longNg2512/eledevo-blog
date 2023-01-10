import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function* getPostsSaga() {
    try {
        const posts = yield call(api.getPosts)
        yield put(actions.getPosts.getPostsSuccess(posts.data.posts))
    } catch (error) {
        yield put(actions.getPosts.getPostsFailure(error))
    }
}

function* createPostSaga(action) {
    try {
        yield call(api.createPost, action.payload)
        yield put(actions.createPost.createPostSuccess())
        yield put(actions.getPosts.getPostsRequest())
    } catch (error) {
        yield put(actions.createPost.createPostFailure(error))
    }
}

function* deletePostSaga(action) {
    try {
        yield call(api.deletePost, action.payload)
        yield put(actions.deletePost.deletePostSuccess())
        yield put(actions.getPosts.getPostsRequest())
    } catch (error) {
        yield put(actions.deletePost.deletePostFailure(error))
    }
}

function* updatePostSaga(action) {
    try {
        yield call(api.updatePost, action.payload)
        yield put(actions.updatePost.updatePostSuccess())
        yield put(actions.getPosts.getPostsRequest())
    } catch (error) {
        yield put(actions.updatePost.updatePostFailure(error))
    }
}

function* searchPostsSaga(action) {
    try {
        const posts = yield call(api.searchPosts, action.payload)
        yield put(actions.searchPosts.searchPostsSuccess(posts.data.posts))
    } catch (error) {
        yield put(actions.searchPosts.searchPostsFailure(error))
    }
}

function* rootSaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, getPostsSaga)
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga)
    yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga)
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga)
    yield takeLatest(actions.searchPosts.searchPostsRequest, searchPostsSaga)
}

export default rootSaga
