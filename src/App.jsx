import Welcome from './components/welcome'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Welcome /></>
    },
    {
      path: "/Home",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/projects",
      element: <><Navbar /><Projects /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
  ])
  return (
    <>
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
