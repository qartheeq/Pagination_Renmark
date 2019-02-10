import React, { Component } from "react";
class Pagination extends Component {
  navigate(evt, pageIndex) {
    evt.preventDefault();
    this.props.navigateToPageByNumber(
      this.props.meta.pagination.current_page + pageIndex
    );
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" />
          <div className="col-md-5">
            <ul className="pager">
              {this.props.meta.pagination.current_page > 1 ? (
                <li>
                  <a onClick={evt => this.navigate(evt, -1)}>Previous</a>
                </li>
              ) : (
                <li className="disabled">
                  <a onClick={evt => evt.preventDefault()}>Previous</a>
                </li>
              )}

              {this.props.meta.pagination.current_page <
              this.props.meta.pagination.total_pages ? (
                <li>
                  <a onClick={evt => this.navigate(evt, 1)}>Next</a>
                </li>
              ) : (
                <li className="disabled">
                  <a onClick={evt => evt.preventDefault()}>Next</a>
                </li>
              )}
            </ul>
            {this.props.meta.pagination.total_pages > 1 ? (
              <strong style={{color:"midnightblue"}} >
                Showing {this.props.meta.pagination.count} Records from Page{" "}
                {this.props.meta.pagination.current_page} /{" "}
                {this.props.meta.pagination.total_pages}{" "}
              </strong>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
