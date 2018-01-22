import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import Album from './Album'

import './show-artist.css'

class ShowArtist extends Component {
  componentDidMount() {
    const { match: { params } } = this.props
    this.props.getShowArtist(params.artistId)
  }

  render() {
    return (
      <div className="showArtist">
        {
          Object.keys(this.props.artist).length > 0 ?
          this.props.artist.items.map(album =>
            <Album
              key={album.id}
              name={album.name}
              image={album.images[1].url} />
          ) : <CircularProgress size={60} thickness={7} />
        }
      </div>
    );
  }
}

export default ShowArtist;
