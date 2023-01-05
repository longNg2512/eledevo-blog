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
        const post = yield call(api.createPost, action.payload)
        yield put(actions.createPost.createPostSuccess(post.data.post))
    } catch (error) {
        yield put(actions.createPost.createPostFailure(error))
    }
}

function* rootSaga() {
    yield takeLatest(actions.getPosts.getPostsRequest, getPostsSaga)
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga)
}

export default rootSaga
