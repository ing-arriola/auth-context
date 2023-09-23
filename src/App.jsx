import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* public routes */}
      <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

          {/* we want to protect these routes */}
          <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    
  )
}

export default App
