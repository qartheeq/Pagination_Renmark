import React, { Component } from "react";
import axios from "axios";
import Loader from "./Loader";
import ClientsList from "./ClientsList";
import Pagination from "./Pagination";
import ClientsFilterByExhange from "./ClientsFilterByExhange";

class Clients extends Component {
  constructor() {
    super();
    this.state = {
      exchanges: [],
      clients: [],
      loadingData: true,
      exchangeSearchStr: ""
    };
  }
  componentDidMount() {
    axios
      .all([this.getExchangeList(), this.getCLientsList()])
      .then(response => {
        this.setState({
          exchanges: response[0].data.data,
          clients: response[1].data.data,
          meta: response[1].data.meta,
          loadingData: false
        });
      });
  }
  getExchangeList() {
    return axios.get("https://api.renmark.ir/exchanges");
  }
  getCLientsList() {
    return axios.get("https://api.renmark.ir/companies");
  }
  navigateToPageByNumber(page) {
    this.setState({ loadingData: true }, () => {
      axios
        .get("https://api.renmark.ir/companies?page=" + page)
        .then(response => {
          this.setState({
            clients: response.data.data,
            meta: response.data.meta,
            loadingData: false
          });
        });
    });
  }
  navigateToPageByExchange() {
    this.setState({ loadingData: true}, () => {
      axios
        .get("https://api.renmark.ir/companies?exchange=" + this.state.exchangeSearchStr)
        .then(response => {
          this.setState({
            clients: response.data.data,
            meta: response.data.meta,
            loadingData: false
          });
        });
    });
  }
  updateSearchStr(exchange) {
    this.setState({ exchangeSearchStr: exchange });
  }
  renderUI() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Pagination
              meta={this.state.meta}
              navigateToPageByNumber={this.navigateToPageByNumber.bind(this)}
            />
          </div>
          <div className="col-md-6">
            <ClientsFilterByExhange
              exchanges={this.state.exchanges}
              exchangeSearchStr={this.state.exchangeSearchStr}
              navigateToPageByExchange={this.navigateToPageByExchange.bind(
                this
              )}
              updateSearchStr={this.updateSearchStr.bind(
                this
              )}
            />
          </div>
        </div>
        <ClientsList clients={this.state.clients} />
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.state.loadingData ? (
          <div>
            <Loader />
          </div>
        ) : (
          this.renderUI()
        )}
      </div>
    );
  }
}

export default Clients;
