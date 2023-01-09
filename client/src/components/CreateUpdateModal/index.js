import React, { useState, useCallback, useEffect } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    FormControl,
    TextField,
    Button,
} from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { modalState$ } from '../../redux/selectors'
import {
    hideCreatePostModal,
    createPost,
    updatePost,
} from '../../redux/actions'

const CreateModal = () => {
    const [data, setData] = useState({
        author: '',
        title: '',
        content: '',
    })

    const {
        showCreate,
        modalTitle,
        modalSubmitName,
        id,
        title,
        content,
        author,
    } = useSelector(modalState$)

    useEffect(() => {
        setData({
            author: author,
            title: title,
            content: content,
        })
    }, [author, title, content])

    const dispatch = useDispatch()

    const onCloseCreate = useCallback(() => {
        dispatch(hideCreatePostModal())
    }, [dispatch])

    const handleOnChange = e =>
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })

    const onSubmitCreate = useCallback(() => {
        if (!id) {
            dispatch(createPost.createPostRequest(data))
        } else {
            dispatch(updatePost.updatePostRequest({data, id}))
        }

        onCloseCreate()
    }, [dispatch, data, onCloseCreate, id])

    return (
        <Dialog open={showCreate} fullWidth={true} onClose={onCloseCreate}>
            <DialogTitle>{modalTitle}</DialogTitle>
            <DialogContent>
                <FormControl sx={{ m: 1, width: '95%' }} variant="standard">
                    <TextField
                        autoFocus
                        name="author"
                        label="Author"
                        multiline
                        variant="standard"
                        value={data.author}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ marginTop: 5 }}
                        name="title"
                        label="Title*"
                        multiline
                        variant="standard"
                        value={data.title}
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ marginTop: 5 }}
                        name="content"
                        label="Content*"
                        multiline
                        variant="standard"
                        value={data.content}
                        onChange={handleOnChange}
                    />
                </FormControl>
            </DialogContent>
            <DialogActions sx={{ marginTop: 2 }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={onSubmitCreate}
                >
                    {modalSubmitName}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateModal
