import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import { COLUMNS_2 } from "./transaction_attributes";
import MOCK_DATA from "./transaction_data.json";
import { useState } from "react";
import ColumnFilter from "./ColumnFilter";

const WalletTracker = (props) => {
  let columns = useMemo(() => COLUMNS_2, []);
  let [data, setdata] = useState(useMemo(() => MOCK_DATA, []));
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const fetchTxn = async (event) => {
    event.preventDefault();
    // console.log("hi", event.target.wallet_address.value);
    let req_body = {
      wallet_address: event.target.wallet_address.value,
    };
    // console.log("Ashish", JSON.stringify(req_body));
    const response = await fetch("/api/wallet_tracker", {
      method: "POST",
      body: JSON.stringify(req_body),
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
    prepareRow,
    state: { globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      disableSortRemove: true,
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <div className="table-container">
      <form onSubmit={fetchTxn}>
        <label htmlFor="wallet_address">Wallet Address: </label>
        <input type="text" id="wallet_address" name="wallet_address" required />
        <button type="submit">Track</button>
      </form>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                    {column.canFilter ? column.render("Filter") : null}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()}>{column.render("Footer")} </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
};

export default WalletTracker;
