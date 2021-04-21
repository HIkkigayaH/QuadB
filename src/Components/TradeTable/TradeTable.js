import React from "react";
import "./TradeTable.css";
import { connect } from "react-redux";
import { v1 as uuid } from "uuid";

const mapStateToProps = (state) => ({
  tableHeaders: state.DataReducer.table.headers,
  tableRows: state.DataReducer.table.rows,
});

const TradeTable = ({ tableHeaders, tableRows }) => {
  return (
    <div className="trade-table-container">
      <table className="w-100 trade-table">
        <thead>
          <tr>
            {tableHeaders.length &&
              tableHeaders.map((header) => (
                <th key={uuid()}>
                  <h4>
                    <span className="ttc pointer">{header}</span>
                  </h4>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.length &&
            tableRows.map((row, idx) => (
              <tr key={uuid()}>
                <td>
                  <h4>{idx + 1}</h4>
                </td>
                <td>
                  <h4 className="exchange-name flex justify-center">
                    <img
                      src={row[0][0]}
                      alt={row[0][1] + "logo"}
                      className="currency-logo dib"
                    />
                    <p className="dib ma0">{row[0][1]}</p>
                  </h4>
                </td>
                <td>
                  <h4>&#8377; {row[1]}</h4>
                </td>
                <td>
                  <h4>
                    &#8377; {row[2][0]} / &#8377; {row[2][1]}
                  </h4>
                </td>
                <td className={`${row[3] < 0 ? "cell-red" : "cell-green"}`}>
                  <h4>{row[3]} %</h4>
                </td>
                <td className={`${row[3] < 0 ? "cell-red" : "cell-green"}`}>
                  <h4>
                    {row[3] < 0 ? "▼ " : "▲ "}
                    <span>&#8377; {row[4]}</span>
                  </h4>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(TradeTable);
