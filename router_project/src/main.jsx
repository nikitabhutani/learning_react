import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import About from './Routes/About.jsx'
import ContactUs from './routes/ContactUs.jsx'
import User from './routes/User.jsx'
import Github from './routes/Github.jsx'
import { githubInfoLoader } from './routes/Github.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'ContactUs',
        element: <ContactUs/>
      },
      {
        path: 'User/:id',
        element: <User/>
      },
      {
        loader: githubInfoLoader ,
        path: 'Github',
        
        element: <Github/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
