import React, { Fragment } from 'react';
import Row from './Row';
import Cell from './Cell';
import CellHeader from './CellHeader';

export default ({ count, rows }) => {
  const cellCount = count;
  const rowCount = rows.length;
  const colCount = cellCount / rowCount;

  const renderRows = () => {
    return new Array(rowCount)
      .fill(null)
      .map((_, idx) => {
        return (
          <Row key={idx}>
            <CellHeader>{rows[idx]}</CellHeader>
            {renderRowCells(idx)}
          </Row>
        );
      });
  }

  const renderRowCells = (n) => {
    return new Array(cellCount / rowCount)
      .fill(null)
      .map((_ , idx) => {
        const key = (n * colCount) + idx + 1;
        return <Cell key={key}>{key}</Cell>;
      });
  };

  return (
    <Fragment>
      {renderRows()}
    </Fragment>
  );
}
