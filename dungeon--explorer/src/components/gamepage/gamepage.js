import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import GameMenu from './gamemenu'
import DungeonDisplay from './dungeonDisplay'
import { playerMovement, updateCell, updatePlayer } from '../../actions/gameActions.js';

const GamePage = props => {
  // our key event handler functions
  const { grid, monsters, players } = props;

  const logKey = (e) => {
    let player = players[0]
    
    let updatedP = props.playerMovement(e.key, grid, player)

  }

  useEffect(() => {
    let move = window.addEventListener('keypress', logKey);
    if (move != null) {
      console.log(move)
    
    }
    return () => {
      window.removeEventListener('keypress', logKey)

    }
  }, []);

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
