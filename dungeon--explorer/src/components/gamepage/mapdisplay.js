import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {selectMap} from '../../actions/userActions.js'
import styled from 'styled-components';




const MapDisplay = props => {



return(<div>MapDisplay</div>)
}



const mapStateToProps = state => {
return {
  grid: state.playerReducer.grid}}

export default connect(mapStateToProps,{selectMap})(MapDisplay);

