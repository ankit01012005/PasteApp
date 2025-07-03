<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
=======

import { createBrowserRouter } from 'react-router-dom'
import './App.css'
>>>>>>> 239059d17dfa3f93b5e006db2976228fe089d31d
import Navbar from './components/Navbar'
import Home from './components/Home'
import Viewpaste from './components/Viewpaste'
import Pastes from './components/Pastes'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
          <Navbar />
          <main className="p-4">
            <Home />
          </main>
        </div>
      ),
    },
    {
      path: "/pastes",
      element: (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
          <Navbar />
          <main className="p-4">
            <Pastes />
          </main>
        </div>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
          <Navbar />
          <main className="p-4">
            <Viewpaste />
          </main>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
