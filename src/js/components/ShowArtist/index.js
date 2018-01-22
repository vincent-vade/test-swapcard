import React, { Component } from 'react';

class ShowArtist extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { match: { params } } = this.props

    this.props.getShowArtist(params.artistId)
    console.log(this.props.getShowArtist(params.artistId))
  }

  render() {
    return (
      <div className="about">
        about page
      </div>
    );
  }
}

export default ShowArtist;
