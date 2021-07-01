import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import GameMenu from './gamemenu'
import DungeonDisplay from './dungeonDisplay'
import { playerMovement, updateCell } from '../../action/gameActions';

const GamePage = props => {

  cellCheck = (cellId) => {

  return
  }

  // our key event handler functions
  const {grid, monsters, players} = props;
  gameKeyEvent = (Key) => {

    let player = players[0] 
    // up
    if (key.toLowerCase() == "w") {
    player
    }
    // down
    if (key.toLowerCase() == "s") {

    }

    //left
    if (key.toLowerCase() == "a") {

    }

    //right
    if (key.toLowerCase() == "d") {

    }
    return null
  }



  return (<div><p>Main page</p>
    <DungeonDisplay />
    <GameMenu />
  </div>)

}

const mapStateToProps = state => {
  return {
    grid: state.playerReducer.grid,
    monsters: state.playerReducer.monsters,
    players: state.playerReducer.players

  }


}

export default connect(mapStateToProps, { playerMovement, updateCell, updatePlayer })(GamePage);
