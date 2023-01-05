import React, { useCallback } from 'react'
import { Container } from '@mui/material'
import PostList from '../../components/PostList'
import Header from '../../components/Header'
import { Add } from '@mui/icons-material'
import { StyledFab } from './style'
import CreateDialog from '../../components/CreateModal'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'

const PostsPage = () => {
    const dispatch = useDispatch()

    const openShowCreateModal = useCallback(() => {
        dispatch(actions.showModal())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreateDialog />
            <StyledFab color="success" onClick={openShowCreateModal}>
                <Add />
            </StyledFab>
        </Container>
    )
}

export default PostsPage
