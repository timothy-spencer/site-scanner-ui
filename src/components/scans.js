import React from 'react';

// ========================================

class Scans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scantypes: [],
      selected_scantype: '',
    };
  }

// ========================================

  componentDidMount() {
    fetch(`https://site-scanning.app.cloud.gov/api/v1/scans/`)
      .then(result => result.json())
      .then(json => this.setState({scantypes: json}))
      .then(scantype => this.setState({selected_scantype: this.state.scantypes[0]}))
  }

  handleChange = (event) => {
    this.setState({selected_scantype: event.target.value});
  }

  render() {
    if (this.state.scantypes.length === 0) {
      return null;
    }

    const scantypeselects = this.state.scantypes.map((scantype) => 
      <option key={scantype} value={scantype}>{scantype}</option>
    );

    return (
      <div>
        <div className="scans-chooser">
          <label>
            Scan type to view:
            <select id="scantypeselect" value={this.state.selected_scantype} onChange={this.handleChange}>
              {scantypeselects}
            </select>
          </label>
        </div>
        <div className="scans-viewer">
          <Scansviewer scantype={this.state.selected_scantype} />
        </div>
      </div>
    );
  }
}

class Scansviewer extends React.Component {
  render() {
    return (
      <p>Scan Type: {this.props.scantype}</p>
    );
  }
}

export default Scans

