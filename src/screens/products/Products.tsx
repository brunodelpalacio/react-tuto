import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/Counter';
import ProductsService from '../../services/ProducService';
import { useState } from 'react';
import useStyles from './products-styles';
import ProductItem from '../../components/ProductItem';




const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const classes = useStyles();

  const onClickButton = () => {
    navigate('details');
  };

  useEffect(() => {
    async function asyncCall() {
      //console.log('calling');
      const result = await ProductsService.getProducts();

      setProducts(result.data);
    }
    asyncCall();
  }, []);

  console.log(products);

  if (products.length === 0) {
    return <h1>Cargando...</h1>
  }

  return (
    <div className={classes.container}>
      <ProductItem />
      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
      <Counter />
    </div>
  );
};

export default Products;
