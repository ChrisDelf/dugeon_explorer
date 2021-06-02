import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Form, Field, withFormik } from 'formik/dist/index';
import * as Yup from 'yup';

const LoginForm = props => {



return(<>
  <div className = 'loginContainer'>
  <Form className = 'formContainer'>
  <h1>Login</h1>
  <label>
  Username
  <Field className = 'formInputs' type = 'text' name = "username"/> 
  </label>
  <label>
  Password
  <Field className = 'formInputs' type = 'text' name = "password"/>
  </label>
  <div className = 'btnContainer'>
  <button className = 'btnLogin' type = 'submit'>
  Login
  </button>
  </div>


  </Form>
  </div>

  </>)}


// formik configuration
const FormikLoginForm = withFormik({
mapPropsToValues({username, password}){
return{
  username: username || '',
  password: password || ''
};
},

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Enter a password')
  }),

  handleSubmit(values, {props}){
  console.log("poop", values, props)}


})(LoginForm)


export default FormikLoginForm; 
