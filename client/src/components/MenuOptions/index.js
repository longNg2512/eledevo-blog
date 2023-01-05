import React, { useCallback } from 'react'
import { MenuItem, Divider } from '@mui/material'
import { StyledMenu } from './styled'
import { Edit, MoreHoriz, Delete } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { deleteModal } from '../../redux/actions'

const MenuOptions = ({ anchorEl, openMenu, handleCloseMenu, id }) => {
    const dispatch = useDispatch()

    const openShowDeleteModal = useCallback(() => {
        dispatch(deleteModal.showDeleteModal(id))
    }, [dispatch, id])

    return (
        <div>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={handleCloseMenu} disableRipple>
                    <Edit />
                    Edit
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleCloseMenu()
                        openShowDeleteModal()
                    }}
                    disableRipple
                >
                    <Delete />
                    Delete
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleCloseMenu} disableRipple>
                    <MoreHoriz />
                    More
                </MenuItem>
            </StyledMenu>
        </div>
    )
}

export default MenuOptions
