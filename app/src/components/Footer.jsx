import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer class="p-5 bg-theme text-small">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-12 ">
                            <div class="row">
                                <div class="col-12 col-sm-3">
                                    <h5 class="text-white">¿Quién es Linseth?</h5>
                                    <ul class="list-unstyled">
                                        <li><a href="#" target="_blank">Linseth Castro</a></li>
                                        <li><a href="#" target="_blank">Formación</a></li>
                                        <li><a href="#" target="_blank">Experiencia</a></li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-3">
                                    <h5 class="text-white">Cursos</h5>
                                    <ul class="list-unstyled">
                                        <li><a href="">Piano Niños</a></li>
                                        <li><a href="">Piano Adultos</a></li>
                                        <li><a href="">Solfeo Niños</a></li>
                                        <li><a href="">Solfeo Adultos</a></li>
                                        <li><a href="">Canto Niños</a></li>
                                        <li><a href="">Canto Adultos</a></li>
                                        <li><a href="">Coro Niños</a></li>
                                        <li><a href="">Coro Adultos</a></li>
                                       
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-3">
                                    <h5 class="text-white">Academía</h5>
                                    <ul class="list-unstyled">
                                        <li><a href="" target="_blank">Acerca de</a></li>
                                        <li><a href="" target="_blank">Contacto</a></li>

                                    </ul>
                                    <h5 class="text-white">Eventos</h5>
                                    <ul class="list-unstyled">
                                        <li><a >Conciertos</a></li>
                                        <li><a>Recitales</a></li>
                                        <li><a>Noche de Talentos</a></li>
                                    </ul>
                                </div>
                                <div class="col-12 col-sm-3">
                                    <h5 class="text-white">Redes Sociales</h5>
                                    <ul class="list-unstyled">
                                        <li><a>Facebook</a></li>
                                        <li><a href="https://www.fiverr.com/sunlimetech/design-and-fix-your-bootstrap-4-issues" target="_blank">Instagram</a></li>
                                        <li><a href="https://www.fiverr.com/sunlimetech/design-and-fix-your-bootstrap-4-issues" target="_blank">LinkedIn</a></li>

                                    </ul>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <ul class="list-unstyled list-inline mb-0 text-center">
                    <img src={require("../images/logo-wh.png")}  width="800"/>
                    </ul>
                    <hr />

                    <div class="col-12 text-center text-white">
                        <p>2019 César Jiménez Aguilar.Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;