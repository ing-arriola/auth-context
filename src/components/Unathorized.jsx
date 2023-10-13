import { useNavigate } from 'react-router-dom'

const Unathorized = () => {
    const navigate = useNavigate()

    const goBack =  () => navigate(-1)

  return (
    <section>
        <h1>No estas autorizado </h1>
        <br/>
        <p>No tienes permisos</p>
        <div className="flexGrow">
            <button onClick={goBack} >Ir atras</button>
        </div>
    </section>
  )
}

export default Unathorized