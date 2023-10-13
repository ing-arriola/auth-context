import { Link } from "react-router-dom"

const Lounge = () => {
  return (
    <section>
        <h1>Lounge page</h1>
        <br/>
        <p>Admin y Editor pueden entrar aqui</p>
        <section className="flexGrow" >
            <Link to='/'>Home</Link>
        </section>
    </section>
  )
}

export default Lounge