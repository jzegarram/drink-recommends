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
      <Card sx={{ 
          width: 300,
          // margin-left: auto;
          // width: 250px;
          boxShadow: "0 6px 10px 4px rgba(70, 66, 159, 0.1)",
          // height: 300px;
          borderRadius: "5px",
          backdropFilter: "blur(14px)",
          backgroundColor: "rgba(70, 66, 130, 0.4)",
          // padding: 10px; margin-left: auto;
          // width: 250px;
          // box-shadow: 0 15px 25px rgba(129, 124, 124, 0.2);
          // height: 300px;
          // border-radius: 5px;
          // backdrop-filter: blur(14px);
          // background-color: rgba(255, 255, 255, 0.2);
          // padding: 10px; 
        }}>
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
