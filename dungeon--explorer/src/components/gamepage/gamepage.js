import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import GameMenu from './gamemenu'
import DungeonDisplay from './dungeonDisplay'

const GamePage = props => {


  return (<div><p>Main page</p>
    <DungeonDisplay />
    <GameMenu />
  </div>)

}


export default GamePage;
