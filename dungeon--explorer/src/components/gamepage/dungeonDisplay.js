import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { selectMap } from '../../actions/userActions.js'
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

const Cell = styled.div`
 width: 20px;
  height: 20px;

`
const Row = styled.div`
  display:flex;
  width: 75%;
  height: 20px;

`

const DungeonDisplay = props => {
  const [cellColor, setCellColor] = useState('Black')


  return (<div>{props.grid == null || props.grid.length == 0 ? (<div>Map has not loaded</div>) :


    props.grid.map(r =>
    (<Row>
      {r.map(cell => {
        let color = ''
        if (cell.cellType === 'Floor') {
          color = 'brown';
        }
        if (cell.cellType === 'Door') {
          color = 'gray';
        }
        if (cell.cellType === 'Wall') {
          color = 'black';
        }
        
        if (cell.containsM.length > 0 && cell.roomType != 'Wall') {
          color = 'red';
        }
        if (cell.containsP.length > 0 && cell.roomType != 'Wall') {
          color = 'yellow'
        }

        //setCellColor(color)
        return (<Cell style={{
          backgroundColor: color,

        }} />);
      }

      )}
    </Row>
    )
    )
  }</div>
  )
}



const mapStateToProps = state => {
  return {
    grid: state.playerReducer.grid
  }
}

export default connect(mapStateToProps, { selectMap })(DungeonDisplay);

