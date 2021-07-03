import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import GameMenu from './gamemenu'
import DungeonDisplay from './dungeonDisplay'
import { playerMovement, updateCell, updatePlayer } from '../../actions/gameActions.js';

const GamePage = props => {
  // our key event handler functions
  const { grid, monsters, players } = props;

  useEffect(() => {
    let move = window.addEventListener('keydown', props.playerMovement);
    if (move != null) {
      console.log(move)
    
    }
    return () => {
      window.removeEventListener('keydown', props.playerMovement)

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
