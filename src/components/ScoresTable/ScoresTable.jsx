import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

import { scoreHeaders } from '../../config/constants';

import {
  TableWrapper,
  PlayerTitleWrapper,
  PlayerNameWrapper,
  ScoresTableWrapper,
  ScoresRow
} from './ScoresTable.styles.js';

const ScoresTable = (props) => {
  const {
    values,
    handleSubmit
  } = useFormikContext();
  const { options, scores } = values;
  const columnsNumberArray = Array(options.columnsNumber).fill(0);

  return (
    <form onSubmit={handleSubmit}>
      <TableWrapper
        className={props.className}
      >
        <tr>
          <td>empty</td>
          {
            options.players.map((player) => (
              <PlayerTitleWrapper playerName={options.players.length}>
                <PlayerNameWrapper>{player.name}</PlayerNameWrapper>
              </PlayerTitleWrapper>
            ))
          }
        </tr>
        <tr>
        {
          Object.keys(scoreHeaders).map((key, index) => (
            <React.Fragment>
              <td>{scoreHeaders[key]?.title}</td>
              {
                options.players.map(() => (<td>nic</td>))
              }
            </React.Fragment>
            )
          )
        }
        </tr>
        {
          Object.keys(scoreHeaders).map((key, index) => {
            console.log(key, scoreHeaders[key]);
            return (
              <tr>
                <td>{scoreHeaders[key]?.title}</td>
                {
                  options.players.map(() => (
                    <PlayerTitleWrapper playerName={options.players.length}>
                      <ScoresTableWrapper>
                        <ScoresRow>
                          {
                            columnsNumberArray.map(() => (
                              <td>column</td>
                            ))
                          }
                        </ScoresRow>
                      </ScoresTableWrapper>
                    </PlayerTitleWrapper>
                  ))
                }
              </tr>
            )
          })
        }
      </TableWrapper>
    </form>
  );
}

ScoresTable.propTypes = {
  className: PropTypes.string
};

ScoresTable.defaultProps = {
  className: ''
};

export default ScoresTable;
