import Registration from "./pages/Registration";
import Login from './pages/Login'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "./components/Layout";
import Home from "./pages/Home";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}