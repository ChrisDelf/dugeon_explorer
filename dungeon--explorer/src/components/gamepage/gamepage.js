import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import GameMenu from './gamemenu'
import DungeonDisplay from './dungeonDisplay'
import { playerMovement, updateCell, updatePlayer } from '../../actions/gameActions.js';
import { selectMap } from '../../actions/userActions';

const GamePage = props => {
  // our key event handler functions
  const { grid, monsters, players, player, loading, mapId } = props;

  const logKey = (e) => {
    if (player == '') {


      return
    }

    let updatedP = props.playerMovement(e.key, grid, player)

  }

  useEffect(() => {
    if (player != '') {
      window.addEventListener('keypress', logKey);
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
    players: state.playerReducer.players,
    player: state.playerReducer.player,
    loading: state.playerReducer.playerLoading,
    mapId: state.playerReducer.mapId,


  }


}

export default connect(mapStateToProps, { selectMap, playerMovement, updateCell, updatePlayer })(GamePage);
