import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/Home'
import PostsPage from '../pages/Posts'

export default createBrowserRouter([
    {
        element: <HomePage />,
        path: '/',
    },
    {
        element: <PostsPage />,
        path: '/posts',
    },
])
