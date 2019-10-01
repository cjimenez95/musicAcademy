//dependecies
import React, { Component } from 'react';
import axios from 'axios';

//icons
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

//assets
import './styles/Contact.css';


class Contact extends Component {
   constructor() {
      super();
      this.state = {
         completeName: ''
         , mail: ''
         , subject: ''
         , phone: ''
         , message: ''
      }
   }

   handleChange = event => {
      const nameInput = event.target.name;
      const valueInput = event.target.value;
      this.setState({
         [nameInput]: valueInput
      });
   }

   handleSubmit = event => {
      event.preventDefault();
      console.log('entro al submit');
      axios.post(`https://localhost:9000/sendMessage/sendMail`,
         {

         }).then(res => {

            console.log(res.data);
         })
   }


   render() {
      return (
         <div className="container" >

            <div className="row">

               <div className="col-xl-6 mx-auto text-center">
                  <div className="section-title mb-100">
                     <h4>Contáctame</h4>
                  </div>
               </div>

            </div>

            <div className="row">
               <div className="col-md-8">
                  <form className="contact-form">
                     <div className="row">
                        <div className="form-group col-md-6">
                           <label>Nombre Completo</label>
                           <input className="form-control" type="text" placeholder="nombre completo" />
                        </div>

                        <div className="form-group col-md-6">
                           <label>Correo Electrónico</label>
                           <input className="form-control" type="email" placeholder="correo electrónico" />
                        </div>
                     </div>

                     <div className="row">
                        <div className="form-group col-md-6">
                           <label>Asunto</label>
                           <input className="form-control" type="text" placeholder="asunto" />
                        </div>
                        <div className="form-group col-md-6">
                           <label>Teléfono</label>
                           <input className="form-control" type="tel" placeholder="teléfono" />
                        </div>
                     </div>

                     <div className="row">
                        <div className="form-group col-md-12">
                           <label>Mensaje</label>
                           <textarea className="form-control" placeholder="mensaje"></textarea>
                           <br />
                           <input className="btn btn-primary btn-block" type="submit" value="enviar mensaje" onClick={this.handleSubmit} />
                        </div>
                     </div>
                  </form>
               </div>

               <div className="col-md-4">

                  <div className="form-group">
                     <div className="single-contact">
                        <i className="fa fa-phone"><PhoneIcon /></i>
                        <h5>Teléfono</h5>
                        <p>(506) 8888 8888</p>
                     </div>
                  </div>

                  <div className="form-group">
                     <div className="single-contact">
                        <i className="fa fa-envelope"><MailIcon /></i>
                        <h5>Correo Electrónico</h5>
                        <p>infor@personal.com</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
export default Contact;