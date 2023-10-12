import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home';
import Missing from './components/Missing';
import Editor from './components/Editor';
import Admin from './components/Admin';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import Unauthorized from './components/Unauthorized';
import RequiredAuth from './components/RequiredAuth';


function App() {
{/* Para mantener nuestro enrutamiento limpio no se agregara
 aqui nada referente al manejo del estado de authorization.
 Usaremos las recomendaciones de la doc de react-router
 */}
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* Estas seran nuestras rutas publicas */}
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="linkpage" element={<LinkPage />} />
      <Route path="unauthorized" element={<Unauthorized />} />

      {/* Estas seran nuestras rutas protegidas */}
      <Route path='' element={<RequiredAuth/>}>
        <Route path="/" element={<Home />} />
        <Route path="editor" element={<Editor />} />
        <Route path="admin" element={<Admin />} />
        <Route path="lounge" element={<Lounge />} />
      </Route>
        
      
      {/* Para rutas no conocidas*/}
      <Route path='*' element={<Missing/>}/>
      </Route>
    </Routes>
    
  )
}

export default App
