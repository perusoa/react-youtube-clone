import React, { Component } from 'react';
import Logo from '../images/yt_logo_mono_dark.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="row search-bar-container">
        <div className="max-container">
          <div className="col-md-12">
            <img className="logo" src={ Logo } />
            <input
              placeholder="Search..."
              value={ this.state.term }
              onChange={ (event) => this.onInputChange(event.target.value) } />
          </div>
        </div>
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;