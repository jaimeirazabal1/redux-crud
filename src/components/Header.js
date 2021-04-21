import React from 'react'
import {
    Link
} from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <h1> <Link to={'/'} className="btn btn-link text-linght" style={{color:'white'}}>CRUD - React, Redux, REST API & Axios</Link></h1>
            </div>
            <Link to={'/products/nuevo'} className="btn btn-danger nuevo-post d-block d-md-inline-block"> Agregar Producto &#43;</Link>
        </nav>
    )
}
