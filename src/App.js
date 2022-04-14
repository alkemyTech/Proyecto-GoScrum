import { Routes, Route } from 'react-router-dom'

import './App.css';
import { Login } from './components/views/Login/Login';
import { Register } from './components/Register/Register';
import { Tasks } from './components/views/Tasks/Tasks';
import { Error404 } from './components/views/Error404/Error404';

export const App = () =>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Tasks />} />
    <Route path="*" element={<Error404 />} />
  </Routes>