import React, { useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Counter from '../../components/Counter';
import ProductsService from '../../services/ProducService';
import { useState } from 'react';
import useStyles from './products-styles';




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

  console.log('Productos: ', products);

  if (products.length === 0) {
    return <h1>Cargando...</h1>
  }

  return (
    <div className={classes.container}>
      <img src="https://www.hola.com/imagenes/cocina/recetas/20191015151658/burrito-pollo-verduras/0-733-361/burrito-pollo-m.jpg" alt="" />
      <Button onClick={onClickButton}>Ve a la página de detalles</Button>
      <Counter />
    </div>
  );
};

export default Products;
