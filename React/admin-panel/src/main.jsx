import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './MainLayout/RootLayout'
import Dashbord from './pages/Dashbord'
import AddColor from './pages/Color/AddColor'
import ViewColor from './pages/Color/ViewColor'
import AddSize from './pages/Size/AddSize'
import ViewSize from './pages/Size/ViewSize'

let AdminRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/' element={<Dashbord />} />

      <Route path='/color/add' element={<AddColor/>} />
      <Route path='/color/view' element={<ViewColor/>} />

      <Route path='/size/add' element={<AddSize/>} />
      <Route path='/size/view' element={<ViewSize/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AdminRoutes} />
  </StrictMode>,
)
