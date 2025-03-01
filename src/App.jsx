
import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Viewpaste from './components/Viewpaste'
import Pastes from './components/Pastes'
import { RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:
      <div>
          <Navbar/>
          <Home/>
      </div>
    },
    {
      path:"/pastes",
      element:
      <div>  
          <Navbar/>
          <Pastes/>
      </div>
    },

    {
      path:"/pastes/:id",
      element:
      <div>
        <Navbar/>
        <Viewpaste/>

      </div>
    },
  ])

  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  )
}

export default App
