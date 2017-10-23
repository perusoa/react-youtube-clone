import React, { Component } from 'react';
import Logo from '../images/react_tube.svg';

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
            <div className="input-container">
              <input
                id="search"
                placeholder="Search..."
                value={ this.state.term }
                onChange={ (event) => this.onInputChange(event.target.value) } />
              <label for="search"><i class="fa fa-search" aria-hidden="true"></i></label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //Method to handle the change events and set new search terms
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;