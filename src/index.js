import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Scans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scantypes: [],
      selected_scantype: null,
    };
  }

  componentWillMount() {
    fetch(`https://site-scanning.app.cloud.gov/api/v1/scans/`)
      .then(result => result.json())
      .then(json => this.setState({scantypes: json}))
  }

  handleChange(event) {
    this.setState({selected_scantype: event.target.value})
  }

  render() {
    if (this.state.scantypes.length === 0) {
      return null;
    }

    const scantypeselects = this.state.scantypes.map((scantype) => 
      <option value="{scantype}">{scantype}</option>
    );

    return (
      <div>
        <div className="scans-chooser">
          <label>
            Scan type to view:
            <select value={this.state.selected_scantype} onChange={this.handleChange}>
              {scantypeselects}
            </select>
          </label>
          <input type="submit" value="Submit" />
        </div>
        <div className="scans-viewer">
          <Scansviewer />
        </div>
      </div>
    );
  }
}

class Scansviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: null
    }
  }

  render() {
    return (
      <p>Data lives here</p>
    );
  }
}

// ========================================

ReactDOM.render(
  <Scans />,
  document.getElementById('root')
);
