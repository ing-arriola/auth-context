import { useRef, useState, useEffect,  } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/axios';
import UseAuth from '../hooks/UseAuth';

const LOGIN_URL = '/auth' // This the same route as the backend

const Login = () => {
    const { setAuth } = UseAuth()
    const navigate = useNavigate() ;
    const location = useLocation () ;
    const from = location.state?.from?.pathname || "/";
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    console.log('from',from)
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(LOGIN_URL,JSON.stringify({user,pwd}),{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }) // user and pwd are the names of the variables that our BE is waiting for so you don't need to specify them again as this is ES6 behaviour
            console.log(JSON.stringify(res?.data))
            const accessToken = res?.data?.accessToken
            const roles = res?.data?.roles
            setAuth({user,pwd,roles,accessToken})
            setUser('');
            setPwd('');
            // setSuccess(true);
            navigate(from,{replace:true}) // se utiliza para navegar a la ruta especificada en from después de que el usuario haya iniciado sesión
            {/*
                { replace: true } indica que se debe reemplazar la entrada actual en el historial de navegación en lugar de agregar una nueva. 
                Esto significa que cuando el usuario navega de regreso desde la página de inicio de sesión, no verá la página de inicio 
                de sesión en el historial de navegación, lo que evita que pueda regresar accidentalmente a la página de inicio de sesión
                 con el botón "Atrás" del navegador */}
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
            
        
    }

    return (
       
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#">Sign Up</a>
                        </span>
                    </p>
                </section>
    )
}

export default Login