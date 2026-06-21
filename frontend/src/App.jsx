import Registration from "./pages/Registration";
import Login from './pages/Login'
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
// import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Students from "./components/Students";
import Contact from "./components/Contact";
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route
          path="/dashboard"
          element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
        >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/students" element={<Students />} />
          <Route path="/dashboard/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}