import React, { useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/Counter';
import ProductsService from '../../services/ProducService';

const Products = () => {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate('details');
  };

  useEffect(() => {
    async function asyncCall() {
      console.log('calling');
      const result = await ProductsService.getProducts();
    }
    asyncCall();
  }, []);

  console.log(Products);

  return (
    <div>
      <Typography>Soy la página de productos</Typography>
      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
      <Counter />
    </div>
  );
};

export default Products;
