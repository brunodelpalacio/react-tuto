import React from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/Counter';

const Products = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('details');
  };

  return (
    <div>
      <Typography>Soy la página de productos</Typography>
      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
      <Counter />
    </div>
  );
};

export default Products;
