import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import '../css/gallery.css'
import { useSelector } from 'react-redux';

export default function TitlebarBelowImageList() {
    const imagesArr = useSelector((state)=> state.restaurantInfo.restaurantImages)
  return (
    <ImageList sx={{ width: '100%' }} cols={4} >
      {imagesArr.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

