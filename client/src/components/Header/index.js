import React from 'react'
import { AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from './style'
import { useDispatch } from 'react-redux'
import { searchPosts } from '../../redux/actions'

export default function Header() {
    const dispatch = useDispatch()

    const onChangeSearchPosts = e => {
        dispatch(searchPosts.searchPostsRequest(e.target.value))
    }

    return (
        <Box sx={{ flexGrow: 1, mb: 3 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'block' },
                        }}
                    >
                        Eledevo Blog
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={onChangeSearchPosts}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
