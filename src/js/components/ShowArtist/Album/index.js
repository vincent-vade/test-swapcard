import React from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import './album.css'

const Album = ({ title, id, name, image }) => (
  <div className="album--item" key={id}>
    <Card>
      <CardMedia
        overlay={false}
      >
        <img src={image} alt="" />
      </CardMedia>
      <CardTitle title={name} subtitle="Card subtitle" />
    </Card>
  </div>
);

export default Album
