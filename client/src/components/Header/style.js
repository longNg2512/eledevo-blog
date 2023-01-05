import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

export const StyledTypography = styled(Typography)(({ theme }) => ({
    "&": {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'lighter',
        padding: '5px 0',
    },
}))
