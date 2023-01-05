import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as pages from './pages'

const Routers = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<pages.HomePage />} />
                    <Route path="posts" element={<pages.PostsPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routers
