import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';

interface Props {
  imgUrl?: string;
  title?: string;
  desc?: string;
}
export default function ActionAreaCard({ imgUrl, title, desc }: Props) {
  return (
    <Grid item>
      <Card sx={{ width: 300 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={imgUrl} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
