import React from "react";
import { useTable, useSortBy } from "react-table";

const DataTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table
      {...getTableProps()}
      className="w-full overflow-auto scrollable-container"
    >
      <thead className="h-12">
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="bg-[#F6F7F8] h-12"
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="text-test-color-072635 text-14 px-6 py-3 text-left"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="px-6 py-4 whitespace-nowrap border-b-2 border-b-slate-200 h-12 "
            >
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="text-14 p-2 text-left">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
