import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  // const images = props.images.map(({description, id, urls}) => {  
    //   or instead image ca ne used instead of description... object
    // return <img alt={description} key={id} src={urls.regular} />;
    // if the other convention is followed then we have to use image.description image.id and so on in the attributes
  // });

  const images = props.images.map(image => {  
    //   or instead image ca ne used instead of description... object
    return <ImageCard key={image.id} image={image} />;
    // if the other convention is followed then we have to use image.description image.id and so on in the attributes
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
