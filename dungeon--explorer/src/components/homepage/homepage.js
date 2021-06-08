import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMaps } from '../../actions/userActions';
import styled from 'styled-components';

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

`

const Header = styled.h1`
font-size: 2em;
align-self: center;
`

const HomePage = props => {



  return (<Container>
    <div className="formContainer">
      <Header> Menu </Header>
      <Button>New Game</Button>
      <Button onClick={() => { props.getMaps(props.userId)}}>Load Map</Button>
      <Button>Logout</Button>
    </div>

  </Container>
  )

}
const mapStateToProps = state => {
  return {
    userId: state.userReducer.token
  }
}

export default connect(mapStateToProps, { getMaps })(HomePage);
