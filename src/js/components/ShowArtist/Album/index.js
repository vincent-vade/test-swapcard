/* @flow */

import React from 'react';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';

import './album.css';

type AlbumProps = {
  title: string,
  id: string,
  name: string,
  image: string
}

const Album = ({
  title,
  id,
  name,
  image }: AlbumProps): ReactElement => (
    <div className="album--item" key={id}>
      <Card>
        <CardMedia
          overlay={false}
        >
          <img src={image} alt="" />
        </CardMedia>
        <CardTitle title={name} />
      </Card>
    </div>
  );

export default Album
