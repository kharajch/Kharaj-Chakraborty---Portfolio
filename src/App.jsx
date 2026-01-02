import Welcome from './components/Welcome'
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
      path: "/About",
      element: <><Navbar /><About /></>
    },
    {
      path: "/Projects",
      element: <><Navbar /><Projects /></>
    },
    {
      path: "/Contact",
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
