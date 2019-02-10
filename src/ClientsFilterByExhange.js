import React, { Component } from "react";
class ClientsFilterByExhange extends Component {
  navigate(evt, pageIndex) {
    evt.preventDefault();
    
  }
  onExhangeChange(evt){
    this.props.updateSearchStr(evt.target.value);
  }
  render() {
    let exchangeList  = this.props.exchanges.map((exchange)=><option key={exchange.id} value={exchange.code} >{exchange.name}</option>)
    return (
      <div style={{marginTop:"20px"}} >
        <input style={{width:"70%",display:"inline-block", marginRight:"10px"}} value={this.props.exchangeSearchStr} onChange={(evt)=>{this.onExhangeChange(evt)}} list="exchangeList" name="browser" className="form-control" placeholder="Search by exchange"  />
        <input type="button" value="Search"  className="btn btn-primary" onClick={()=>{this.props.navigateToPageByExchange()}} />
        <datalist id="exchangeList" >
          {exchangeList}
        </datalist>
      </div>
    );
  }
}

export default ClientsFilterByExhange;
