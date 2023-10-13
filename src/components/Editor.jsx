import { Link } from "react-router-dom"

const Editor = () => {
  return (
    <section>
        <h1>Editor page</h1>
        <br/>
        <p>Tienes permisos de Editor</p>
        <section className="flexGrow" >
            <Link to='/'>Home</Link>
        </section>
    </section>
  )
}

export default Editor