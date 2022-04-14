import { Routes, Route, Navigate } from 'react-router-dom'

import './App.css';
import { Login } from './components/views/Login/Login';
import { Register } from './components/Register/Register';
import { Tasks } from './components/views/Tasks/Tasks';
import { Error404 } from './components/views/Error404/Error404';

const RequireAuth = ({ children }) => {
  if (!localStorage.getItem("logged")) {
    return <Navigate to="/login" replace={true} />
  }
  return children
}

export const App = () =>
  <Routes>
    <Route path="/"
      element={
        <RequireAuth>
          <Tasks />
        </RequireAuth>
      } />
    <Route path="/login" element={<Login />} />
    <Route path="*" element={<Error404 />} />
  </Routes>