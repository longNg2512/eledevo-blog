import { INIT_STATE } from '../../constant'
import { getType, showModal, hideModal } from '../actions'

export default function modalReducers(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case getType(showModal):
            return {
                ...state,
                isShow: true,
            }
        case getType(hideModal):
            return {
                ...state,
                isShow: false,
            }
        default:
            return state
    }
}
