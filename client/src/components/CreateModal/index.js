import React, { useState, useCallback } from 'react'
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
import { hideCreateModal, createPost } from '../../redux/actions'

const CreateModal = () => {
    const [data, setData] = useState({
        author: '',
        title: '',
        content: '',
    })
    const dispatch = useDispatch()
    const { showCreate } = useSelector(modalState$)
    const onCloseCreate = useCallback(() => {
        dispatch(hideCreateModal())
    }, [dispatch])
    const handleOnChange = e =>
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    const onSubmitCreate = useCallback(() => {
        dispatch(createPost.createPostRequest(data))
        onCloseCreate()
    }, [dispatch, data, onCloseCreate])

    return (
        <Dialog open={showCreate} fullWidth={true} onClose={onCloseCreate}>
            <DialogTitle>Create new post</DialogTitle>
            <DialogContent>
                <FormControl sx={{ m: 1, width: '95%' }} variant="standard">
                    <TextField
                        autoFocus
                        name="author"
                        label="Author"
                        multiline
                        variant="standard"
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ marginTop: 5 }}
                        name="title"
                        label="Title*"
                        multiline
                        variant="standard"
                        onChange={handleOnChange}
                    />
                    <TextField
                        sx={{ marginTop: 5 }}
                        name="content"
                        label="Content*"
                        multiline
                        variant="standard"
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
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateModal
