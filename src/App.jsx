import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Category from './pages/Category'
import Search from './pages/Search'
import SingleGif from './pages/SingleGif'
import Favorites from './pages/Favorites'
import GifProvider from './context/gif_context'


const router = createBrowserRouter([
  {
    element: <AppLayout/>,

    children:[
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/:category',
        element: <Category/>,
      },
      {
        path: '/search/:query',
        element: <Search/>,
      },
      {
        path: '/:type/:slug',
        element: <SingleGif/>,
      },
      {
        path: '/favorites',
        element: <Favorites/>,
      },
    ]
  }
])
function App() {
  return (
    <GifProvider>
      <RouterProvider router={router}/>
    </GifProvider>
  )
}
export default App

// home page
// category page
// single gif page
// favorite page
// search page

