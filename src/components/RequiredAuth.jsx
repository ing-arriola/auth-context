import { useLocation, Navigate, Outlet } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

{/*Este componente se utiliza para proteger rutas en una aplicación de React que utiliza React Router y autenticación, y funciona de la siguiente manera: */}
const RequiredAuth = () => {
    const {auth} = UseAuth() // porta UseAuth desde un módulo llamado "UseAuth". Este es un hook personalizado que maneja la lógica de autenticación en la aplicación.
    const location = useLocation() //se utiliza useLocation para obtener información sobre la ubicación actual de la ruta.
    
    {/*
    Se evalúa si el usuario está autenticado, lo que se verifica a través de auth.user.
    Si el usuario está autenticado (auth.user es verdadero), se renderiza <Outlet />. 
    Esto significa que si el usuario está autenticado, 
    se permite el acceso a las rutas anidadas (subrutas) que se encuentran dentro de esta ruta.
    Si el usuario no está autenticado , el componente utiliza <Navigate /> para redirigir al usuario 
    a la ruta de inicio de sesión ('/login') y pasa información sobre la ubicación actual a través del prop state 
    para que la aplicación pueda redirigir al usuario de regreso a la página anterior después de iniciar sesión. 
    El prop replace se utiliza para reemplazar la entrada del historial de navegación actual en lugar de agregar
     una nueva entrada al historial.
    */}
     {/* Cual es el verdadero valor de las props state and replace? prueba quitandolas*/}
    return (
        auth.user ? <Outlet/> : <Navigate to='/login' state={{from:location}} replace/>
    )
   
}

export default RequiredAuth