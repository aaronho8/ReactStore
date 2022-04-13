import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Wallet{" "}
            <span className="badge rounded-pill bg-secondary">
              {"$"}
              {this.props.bank}
            </span>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
