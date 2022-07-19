import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';

export default function Main() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3100/images').then((response) => {
      console.log(response.data);
      setImages(response.data);
    });
    return () => {};
  }, []);

  return (
    <Container>
      <div className="grid">
        {images.map((image) => {
          return (
            <Card
              key={image.id}
              price={image.price}
              image={image.main_attachment.small}
              title={image.title}
              author={image.author}
              likesCount={image.likes_count}
            />
          );
        })}
      </div>
    </Container>
  );
}
