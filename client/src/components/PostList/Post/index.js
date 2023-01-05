import React from 'react'
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from '@mui/material'
import moment from 'moment'
import { Favorite, MoreVert } from '@mui/icons-material'

const Post = ({ post }) => {
    return (
        <Card>
            <CardHeader
                avatar={<Avatar>A</Avatar>}
                title={post.author}
                subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
            />
            <CardMedia
                sx={{ height: 150 }}
                image="https://images.unsplash.com/photo-1661956603025-8310b2e3036d"
                title="green iguana"
            />
            <CardContent>
                <Typography variant="h5" color="textPrimary">
                    {post.title}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    {post.content}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton>
                    <Favorite />
                    <Typography component="span" color="textSecondary">
                        {`${post.likeCount} likes`}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Post
