import React, { useCallback } from 'react'
import { Container } from '@mui/material'
import PostList from '../../components/PostList'
import Header from '../../components/Header'
import { Add } from '@mui/icons-material'
import { StyledFab } from './style'
import CreateModal from '../../components/CreateModal'
import { useDispatch } from 'react-redux'
import { showCreateModal } from '../../redux/actions'
import DeleteModal from '../../components/DeleteModal'

const PostsPage = () => {
    const dispatch = useDispatch()

    const openShowCreateModal = useCallback(() => {
        dispatch(showCreateModal())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <Header />
            <PostList />
            <CreateModal />
            <DeleteModal />
            <StyledFab color="success" onClick={openShowCreateModal}>
                <Add />
            </StyledFab>
        </Container>
    )
}

export default PostsPage
