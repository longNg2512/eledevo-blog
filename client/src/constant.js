export const INIT_STATE = {
    posts: {
        isLoading: false,
        data: [],
        dataFetched: false,
        error: false,
    },
    postModal: {
        id: '',
        author: '',
        content: '',
        modalTitle: '',
        modalSubmitName: '',
        showCreate: false,
        showDelete: false,
    },
}
