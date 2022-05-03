import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export function CardUI({ img, txt1, txt2 }) {


    return (
        <Card className='movie-card' sx={{ maxWidth: 345 }} style={{ backgroundColor: '#ffffff57' }}>
            <CardMedia
                component="img"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography className='txt-1' gutterBottom variant="h5" component="div">
                    {txt1}
                </Typography>
                <Typography className='txt-2' variant="subtitle2">
                    {txt2}
                </Typography>
            </CardContent>
        </Card>
    );
}