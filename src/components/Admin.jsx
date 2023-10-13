import { Link } from "react-router-dom"

const Admin = () => {
  return (
    <section>
        <h1>Adming page</h1>
        <br/>
        <p>Tienes permisos de administrador</p>
        <section className="flexGrow" >
            <Link to='/'>Home</Link>
        </section>
    </section>
  )
}

export default Admin