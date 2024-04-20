import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage.tsx'
import RegisterPage from './pages/Register/Register.tsx'
import LeaveApplicationForm from './pages/LeaveApplicationForm/LeaveApplicationForm.tsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='register' element={<RegisterPage/>}/>
      <Route path='leave-application' element={<LeaveApplicationForm/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
