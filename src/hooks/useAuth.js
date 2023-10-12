import {useContext} from 'react'
import AuthContext from '../context/AuthProvider'
//Este pequeño custom hook nos ayuda a ahorrar tiempo haciendo el import de las lineas 1, 2 como tambien de hacer el useContext
//en cada componente donde queremos usar el contexto que hemos creado
const UseAuth = () => {
  return useContext(AuthContext)
}

export default UseAuth