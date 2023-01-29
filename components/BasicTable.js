import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { COLUMNS } from './columns';
import { COLUMNS_2 } from './transaction_attributes';
// import MOCK_DATA from './MOCK_DATA.json';
import MOCK_DATA from './transaction_data.json';
import { useState } from "react";

const BasicTable = props => {
  let columns = useMemo(() => COLUMNS_2, []);
  let [data, setdata]  = useState(useMemo(() => MOCK_DATA, []));


  const fetchTxn = async () => {
    const response = await fetch("/api/wallet_tracker", {
      method: "POST",
      body: JSON.stringify(""),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data2 = await response.json();
    setdata(data2);
  };


  let {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <div className="table-container">
      <h2>Basict Table</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')} </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <button onClick={fetchTxn}>test</button>

    </div>
  );
};

export default BasicTable;
