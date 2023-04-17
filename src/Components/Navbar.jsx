import React, { useContext, useState } from 'react'
import NewsContext from '../Context/NewsContext'
import { getNews } from '../Context/NewsAction'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [text,setText] = useState("")
    const {dispatch} = useContext(NewsContext)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = await getNews(text)
            dispatch({
                type:"GET_NEWS",
                payload:data
            })
        setText("")
    }
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><h4 className='khabar'>Khabr Purani <br/>खबर पुराणी</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Sport">Sport</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search" onSubmit={(e)=>handleSubmit(e)}>
                        <input value={text} className="form-control me-2" type="search" placeholder="Search"  aria-label="Search" onChange={(e)=>setText(e.target.value)} />
                        <button className="btn button btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        </>

    )
}
export default Navbar