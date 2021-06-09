import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Field, withFormik } from 'formik/dist/index';
import * as Yup from 'yup';
import { generateMap } from '../../actions/userActions'
import styled from 'styled-components';
import ErrorNotice from '../errornotice/errornotice.js'


const Header = styled.h1`
font-size: 2em;
align-self: center;
`
const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: .25em 1em;
border-radius: 3px;

/* this is using the theme provider */
  color: ${props => props.theme.primary};
  border: ${props => props.theme.secondary};

&:hover {
  background: ${props => props.theme.secondary};
  color:  ${props => props.theme.primary}

}

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

const MapForm = props => {




  return (<Container>
    <Form>
    <Header>Map Options</Header>
    <Form className='formContainer'>
      <label>Selecet Map Size{''}
        <Field name="size" as="select">
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </Field></label></Form>
    <label>Player Name{''}
      <Field name="playername" type="text" />
      {props.touched.playername && props.errors.playername && (
            <ErrorNotice>{props.errors.playername}</ErrorNotice>
          )}

    </label>
    <div className='btnContainer'>
      <Button type='submit'>
        Create
      </Button>
      <Button onClick={() => { props.history.push('/homepage/'); }}>
        Exit
      </Button>
    </div>
  </Form>
  </Container>

  )
}


// formik congifuration

const FormikMapForm = withFormik({
  mapPropsToValues({ size, playername }) {
    return { size: size || "small" };


  },
  validationSchema: Yup.object().shape({
    playername: Yup.string().required('Please enter a playername'),
     }),

  handleSubmit(values, { props }) {
    var mapW
    var mapH
    if (values.size == "small")
    {
      mapW = 50
      mapH = 50
    }
    else if(values.size == "medium")
      {  

      mapW = 75
      mapH = 75

      }
    else {
      mapW = 100
      mapH = 100

    }

    
    var requestObj = {players : [{playerName:`${values.playername}`}], height: mapH, width: mapW,userid: props.userId}
    props.generateMap(requestObj, props.userId)
  },
})(MapForm)

const mapStateToProps = state => {
  return {
    userId: state.userReducer.id
  }
}

export default connect(mapStateToProps, { generateMap })(FormikMapForm);
