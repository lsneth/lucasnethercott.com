import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './main/Main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import StreamScout from './stream-scout/StreamScout'
import About from './main/About'
import Show from './stream-scout/Show'
import Search from './stream-scout/Search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: 'stream-scout',
    element: <StreamScout />,
    children: [
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'show',
        element: <Show />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router} />)
