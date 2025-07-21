import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './register';
import Appage from './App';
import Login from './login';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Appage />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  
          <App />
 
)
