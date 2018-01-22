/* @flow */

import React from 'react';
import List from 'material-ui/List/List';
import Avatar from 'material-ui/Avatar';
import ListItem from 'material-ui/List/ListItem';
import { Link } from 'react-router-dom'

import './result.css';

type ResultProps = {
  artits: object
}

const Result = ({
  artists
}: ResultProps): ReactElement => {
  return (
    <div className="artists">
      <List>
        {artists.map((artist) => {
          return (
            <div key={artist.id} className="artist--item">
              <ListItem
                disabled={true}
                leftAvatar={
                  <Avatar src={artist.images.length > 0
                    ? artist.images[1].url
                    : 'http://via.placeholder.com/300x300'} />
                }
              >
                {artist.name}
                <Link to={`/artists/${artist.id}`} className="artist--link">voir +</Link>
              </ListItem>
            </div>
          )
        })
        }
      </List>
    </div>
  )
}


export default Result;
