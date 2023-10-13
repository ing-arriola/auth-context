import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <article style={{padding:'100px'}} >
        <h1>Oppps!!</h1>
        <br/>
        <p>Pagina no encontrada</p>
        <section className="flexGrow" >
            <Link to='/'>Home</Link>
        </section>
    </article>
  )
}

export default Missing