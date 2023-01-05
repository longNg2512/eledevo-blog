import { INIT_STATE } from '../../constant'
import {
    getType,
    showCreateModal,
    hideCreateModal,
    deleteModal,
} from '../actions'

export default function modalReducers(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showCreateModal):
            return {
                ...state,
                showCreate: true,
            }
        case getType(hideCreateModal):
            return {
                ...state,
                showCreate: false,
            }
        case getType(deleteModal.showDeleteModal):
            return {
                ...state,
                showDelete: true,
                id: action.payload,
            }
        case getType(deleteModal.hideDeleteModal):
            return {
                ...state,
                showDelete: false,
                id: '',
            }
        default:
            return state
    }
}
