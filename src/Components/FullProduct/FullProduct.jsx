import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from '../Slider/Slider';
import Rating from '../Rating/Rating';
import styles from './FullProduct.module.scss';

// interface ProductsType {
//   images: string;
//   title: string;
//   description: string;
//   stock: number;
//   brand: string;
//   category: string;
//   discountPercentage: number;
//   price: number;
//   rating: number;
// }[]

const FullProduct = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({ images: '', title: '', description: '' });
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://dummyjson.com/products/' + id);
        setProducts(data);
      } catch (error) {
        console.log(error);
        alert('Error to get pizza');
      }
    }

    fetchPizza();
  }, [id]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <Slider images={products.images}></Slider>
        <ul className={styles.info}>
          <li>
            <h1>{products.title}</h1>
          </li>
          <li>
            <h3>{products.description}</h3>
          </li>
          <li className={styles.stock}>Stock: {products.stock}</li>
          <li className={styles.brand}>Brand: {products.brand}</li>
          <li className={styles.category}>Category: {products.category}</li>
          <li className={styles.sale}>-{products.discountPercentage}%</li>
          <li className={styles.price}>${products.price}</li>
        </ul>
        <div className={styles.right__column}>
          <Rating rating={products.rating} />
          <Link to="/">
            <button className={styles.cartBtn}>Add to Card</button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FullProduct;
