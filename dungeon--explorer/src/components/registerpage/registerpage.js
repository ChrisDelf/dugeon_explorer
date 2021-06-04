import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik/dist/index';
import * as Yup from 'yup';
import { registerUser } from '../../actions/authActions';
import ErrorNotice from '../errornotice/errornotice.js'
import styled from 'styled-components';



const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: .25em 1em;
border-radius: 3px;

/* this is using the theme provider */
  color: ${props => props.theme.primary};
  border: ${props => props.theme.secondary};
`

const Header = styled.h1`
font-size: 2em;
align-self: center;
`
const Container = styled.div`
 color: ${props => props.theme.primary};
  border: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;

 .formContainer{
  display: flex;
  justify-content: center;
  flex-direction: column;
 }

`


const registerForm = props => {


  return (

      <Container>
        <Form className='formContainer'>
          <Header>Register</Header>
          <label>
            Username {'  '}
            <Field className='formInputs' type='text' name="username" />
            {props.touched.username && props.errors.username && (
              <ErrorNotice>{props.errors.username}</ErrorNotice>
            )}
          </label>
          <label>
            Password {'  '}
            <Field className='formInputs' type='password' name="password" />
            {props.touched.password && props.errors.password && (
              <ErrorNotice>{props.errors.password}</ErrorNotice>
            )}
          </label>
          <label>
            Email {'  '}
            <Field className='formInputs' type='email' name="email" />
            {props.touched.email && props.errors.email && (
              <ErrorNotice>{props.errors.email}</ErrorNotice>
            )}
          </label>

          <div className='btnContainer'>
            <Button className='btnReg' type='submit'>Register</Button>

            <Button className='btnLogin' onClick={() => { props.history.push('/'); }}>
              Login here
            </Button>

          </div>


        </Form>
      </Container>

  )
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password, email }) {
    return {
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

  handleSubmit(values, { props }) {
    props.registerUser(values, props.history)
  }


})(registerForm)


const mapStateToProps = state => {
  return {
    token: state.userReducer.token
  }
};

export default connect(mapStateToProps, { registerUser })(FormikRegisterForm);


