import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import { Form, Field, withFormik } from 'formik/dist/index';
import * as Yup from 'yup';
import {registerUser} from '../../actions/authActions';
import ErrorNotice from '../errornotice/errornotice.js'


const registerForm = props => {


return(

<>
  <div className = 'loginContainer'>
  <Form className = 'formContainer'>
  <h1>Register</h1>
  <label>
  Username
  <Field className = 'formInputs' type = 'text' name = "username"/> 
  {props.touched.username && props.errors.username && (
  <ErrorNotice>{props.errors.username}</ErrorNotice>
  )}
  </label>
  <label>
  Password
  <Field className = 'formInputs' type = 'password' name = "password"/>
 {props.touched.password && props.errors.password && (
  <ErrorNotice>{props.errors.password}</ErrorNotice>
  )}
  </label>
  <label>
  Email
  <Field className = 'formInputs' type = 'email' name = "email"/>
 {props.touched.email && props.errors.email && (
  <ErrorNotice>{props.errors.email}</ErrorNotice>
  )}
  </label>

  <div className = 'btnContainer'>
    <button className = 'btnReg'type = 'submit'>Register</button>

  <button className = 'btnLogin' onClick = { () => {props.history.push('/');}}>
  Already Have an account login here
  </button>

  </div>


  </Form>
  </div>

  </>
)}

const FormikRegisterForm = withFormik({
mapPropsToValues({username, password, email}){
return{
  username: username || '',
  password: password || '',
  email: email || '',
};
},

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Enter a password'),
    email: Yup.string().required('Enter in an email')
  }),

  handleSubmit(values, {props}){
  props.registerUser(values, props.history)}


})(registerForm)


const mapStateToProps = state => {
  return{
  token: state.userReducer.token
  }
};

export default connect(mapStateToProps, {registerUser})(FormikRegisterForm); 


