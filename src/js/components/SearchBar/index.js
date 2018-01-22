/* @flow */

import React, { Component } from 'react';
import Result from '../Result';

import './searchbar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value.length > 5) {
      this.props.getResult(e.target.value)
    }
  }

  render() {
    return (
      <div>
        <div className="search">
          <input
            className="search--input"
            onChange={this.handleChange}
            placeholder="Search artist"
          />
        </div>
        <div className="result">
          {
            Object.keys(this.props.result).length > 0 && <Result artists={this.props.result.artists.items} />
          }
        </div>
      </div>
    )
  }
}

export default SearchBar
