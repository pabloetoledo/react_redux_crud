import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (         
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <h1>
                    <Link to="/" className="text-light">CRUD - React, Redux, REST API & Axios</Link>
                </h1>
            </div>
        
            <Link to={"/productos/nuevo"} 
                  className="btn btn-danger nuevo-post d-blok d-md-inline-block">Agregar Productos &#43;
            </Link>
        </nav>
     );
}
 
export default Header;
