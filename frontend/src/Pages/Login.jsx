import React from 'react';  
import {Container,Row,Col,Form,FormGroup ,Button} from "reactstrap";  
import {Link} from 'react-router-dom';
import '../styles/login.css'  ;
import loginImg from "../assets/images/login.png"
import userIcon from "../assets/images/user.png"
const Login = () => {
  return <section>
       <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-centent-between'>  
            <div className="login__img">  
            <img src={loginImg} alt=''/>
              </div> 

            </div>

          </Col>
        </Row>
       </Container>
  </section>
}

export default Login;
