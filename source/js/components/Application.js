import React, { Component } from 'react';
import { func, object } from 'prop-types';

class Application extends Component {
  doSomething = () => {
    const {
      doSomething,
    } = this.props;

    doSomething();
  }

  render() {
    const {
      application,
    } = this.props;

    const {
      isDoingSomething,
    } = application;

    const buttonLabel = isDoingSomething ? 'Doing something' : 'Do something';

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1>React.js Application</h1>
            <button onClick={this.doSomething} className="btn btn-default">{buttonLabel}</button>
          </div>
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  application: object.isRequired,
  doSomething: func.isRequired,
};

export default Application;
