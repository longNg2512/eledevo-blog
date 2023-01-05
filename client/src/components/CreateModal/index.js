import React from 'react'
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
import { hideModal, createPost } from '../../redux/actions'

const CreateDialog = () => {
    const [data, setData] = React.useState({
        author: '',
        title: '',
        content: '',
    })
    const dispatch = useDispatch()
    const isShow = useSelector(modalState$)
    const onClose = React.useCallback(() => {
        dispatch(hideModal())
    }, [dispatch])
    const handleOnChange = e =>
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    const onSubmit = React.useCallback(() => {
        dispatch(createPost.createPostRequest(data))
        onClose()
    }, [dispatch, data, onClose])

    return (
        <Dialog open={isShow} fullWidth={true} onClose={onClose}>
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
                <Button variant="contained" color="success" onClick={onSubmit}>
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CreateDialog
