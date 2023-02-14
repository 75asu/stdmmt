import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';

export default function Home() {
  return (
      <Box 
            display="flex" 
            flexDirection="column" 
            justifyContent={"center"} 
            maxWidth={500}
            alignContent={"center"}
            alignSelf="center"
            marginLeft={60}
            marginRight="auto"
            marginTop={15}
        >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://t3.ftcdn.net/jpg/03/88/97/92/240_F_388979227_lKgqMJPO5ExItAuN4tuwyPeiknwrR7t2.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Student Management System
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A MERN app that helps to manage information about students
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        </Box>
  );
}
