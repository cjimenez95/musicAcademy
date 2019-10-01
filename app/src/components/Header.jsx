//dependencies
import React, { Component } from 'react';
import { Link } from "react-router-dom";

//assets
import './Header.css';


class Header extends Component {
    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-light navColor">
                <a className="navbar-brand ml-4" href="#"> <img src={require("../images/logo-wh.png")} width="250" height="50" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto colorText mt-2">
                      
                        <li className="nav-item mr-4">
                        <Link to="/"> <p className="" href="#">Experiencia</p></Link>
                        </li>
                        <li className="nav-item mr-4">
                        <Link to="/courses">  <p className="" href="#">Cursos</p></Link>
                        </li>
                        <li className="nav-item mr-4">
                        <Link to="/">  <p className="" href="#">Partituras</p></Link>
                        </li>
                        <li className="nav-item mr-4">
                        <Link to="/galery">  <p className="" href="#">Galería</p></Link>
                        </li>
                        <li className="nav-item mr-4">
                        <Link to="/aboutUs"> <p className="" href="#">Acerca de</p> </Link>
                        </li>
                        <li className="nav-item mr-4">
                        <Link to="/contact"><p className="" href="#">Contacto</p></Link>
                        </li>
                    </ul>
                   
                </div>
            </nav>

        );
    }
}
export default Header;