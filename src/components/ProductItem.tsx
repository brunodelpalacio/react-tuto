import { Button } from '@mui/material';
import React, { useState } from 'react';
import useStyles from "./item-styles";

const ProductItem = (props: any) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src="https://www.hola.com/imagenes/cocina/recetas/20191015151658/burrito-pollo-verduras/0-733-361/burrito-pollo-m.jpg" alt="" />
            <h1 className={classes.texto}>{props.product.name}</h1>
            <button className={classes.button}>Añadir al carrito</button>
        </div>
    )




}

export default ProductItem;