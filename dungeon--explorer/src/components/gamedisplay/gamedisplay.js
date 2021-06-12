import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


const GameDisplay = props => {


  return (<div></div>)


}






const mapStateToProps = state => {
  return { map: state.playerReducer.selectedMap }
}



export default connect(mapStateToProps,{selectMap})(GameDisplay)
