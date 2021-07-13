import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getMaps, selectMap, loadMap } from '../../actions/userActions.js'


const Container = styled.div`
 color: ${props => props.theme.primary};
  border: ${props => props.theme.secondary};
  display: flex;
  justify-content: center;
  flex-direction: column;

 .btnContainer{
  display: flex;
  justify-content: center;
  flex-direction: column;


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

const Header = styled.h1`
font-size: 2em;
align-self: center;
`

const SavedMenu = props => {

  useEffect(() => {
    props.getMaps(props.userid);
  }, []);

  return (
    <Container>
      <Header>Saved Maps<button onClick={() => { props.history.push('/homepage/') }}>Back</button>
      </Header>
      <div className="btnContainer">
        {props.maps.map(m => (
          <Button onClick={() => { props.loadMap(m, props.history)}}>{m}</Button>))}
      </div>

    </Container>




  )
}

const mapStateToProps = state => {
  return {
    maps: state.playerReducer.maps,
    userid: state.userReducer.id,

  }
}

export default connect(mapStateToProps, { getMaps, selectMap, loadMap })(SavedMenu);
