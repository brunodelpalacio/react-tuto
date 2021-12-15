import React, { useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/Counter';
import ProductsService from '../../services/ProducService';
import { useState } from 'react';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const onClickButton = () => {
    navigate('details');
  };

  useEffect(() => {
    async function asyncCall() {
      console.log('calling');
      const result = await ProductsService.getProducts();

      setProducts(result.data);
    }
    asyncCall();
  }, []);

  console.log(products);

  return (
    <div>
      <Typography>Soy la página de productos</Typography>
      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
      <Counter />
    </div>
  );
};

export default Products;
