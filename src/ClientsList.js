import React, { Component } from "react";
class ClientsList extends Component {
  render() {
    let companyList = this.props.clients.map((company, index) => {
      return (
        <tr key={company.id+index}>
          <td>{index + 1}</td>
          <td>{company.name}</td>
          <td>
            <img src={company.logo} />
          </td>
          <td>
            {company.tickers.length > 1 ? (
              <ol>
                {company.tickers.map((ticker,tindex) => (
                  <li  key={company.id + tindex} >{ticker.exchange}</li>
                ))}
              </ol>
            ) : (
              company.tickers[0].exchange
            )}
          </td>
        </tr>
      );
    });
    return (
          <table
            className="table table-bordered table-striped"
            width="90%"
            align="center"
          >
            <thead>
              <tr>
                <th className="text-center"> Sl. No </th>
                <th className="text-center"> Company Name </th>
                <th className="text-center"> Company Logo </th>
                <th className="text-center"> Exchange </th>
              </tr>
            </thead>
            <tbody>{companyList}</tbody>
          </table>
    );
  }
}

export default ClientsList;
