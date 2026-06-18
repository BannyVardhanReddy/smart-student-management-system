import Registration from "./pages/Registration";
import Login from './pages/Login'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />} >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}