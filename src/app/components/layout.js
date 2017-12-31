import React from 'react';
import Header from './header';
import Draft from './draft';
import Panels from './panels';
import { Button, Panel } from 'react-bootstrap';


class Layout extends React.Component {
  constructor() {
    super();

  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Panels />
            </div>
            <div className="col-lg-4">
              <Draft />
              <div className="buttons">
                <button type="button" className="btn btn-warning">Save As draft</button>
                <button type="button" className="btn btn-default publish">Publish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Layout;