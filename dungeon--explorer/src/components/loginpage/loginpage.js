import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik/dist/index';
import * as Yup from 'yup';
import { loginUser } from '../../actions/authActions';
import ErrorNotice from '../errornotice/errornotice.js'
import styled from 'styled-components';

//Style Components

const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: .25em 1em;
border-radius: 3px;

/* this is using the theme provider */
  color: ${props => props.theme.primary};
  border: ${props => props.theme.secondary};


`

const LoginForm = props => {
  //const {loginUser} = props


  return (<>
    <div className='loginContainer'>
      <Form className='formContainer'>
        <h1>Login</h1>
        <label>
          Username
          <Field className='formInputs' type='text' name="username" />
          {props.touched.username && props.errors.username && (
            <ErrorNotice>{props.errors.username}</ErrorNotice>
          )}
        </label>
        <label>
          Password
          <Field className='formInputs' type='password' name="password" />
          {props.touched.password && props.errors.password && (
            <ErrorNotice>{props.errors.password}</ErrorNotice>
          )}
        </label>
        <div className='btnContainer'>
          <Button className='btnLogin' type='submit'>
            Login
          </Button>
          <Button className='btnReg' onClick={() => { props.history.push('/register/'); }}>Register</Button>
        </div>


      </Form>
    </div>

  </>)
}


// formik configuration
const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter a username'),
    password: Yup.string().required('Enter a password')
  }),

  handleSubmit(values, { props }) {
    props.loginUser(values, props.history)
  }


})(LoginForm)


const mapStateToProps = state => {
  return {
    token: state.userReducer.token
  }
};

export default connect(mapStateToProps, { loginUser })(FormikLoginForm);
