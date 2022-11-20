import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import axios from 'axios';
import '../../scss/components/Pagination.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import Header from '../Header/Header';

// type ObjType = {
//   id: number;
//   title: string;
//   price: number;
//   thumbnail: string;
//   description: string;
//   discountPercentage: number;
// };

const Home = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(10);
  const [maxPages, setMaxPages] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products?limit=${currentPage}`);
        setItems(data.products);
        setMaxPages(data.total);
      } catch (error) {
        console.log(error);
        alert('Error to get products');
      }
    }
    fetchProduct();
  }, [currentPage, maxPages]);

  const fetchNewProduct = () => {
    setCurrentPage(currentPage + 10);
  };
  return (
    <React.Fragment>
      <Header />
      <InfiniteScroll dataLength={items.length} next={fetchNewProduct} hasMore={true}>
        <div className="products">
          {items.map((obj) => (
            <ProductCard
              id={obj.id}
              key={obj.id}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.thumbnail}
              description={obj.description}
              sale={obj.discountPercentage}
            />
          ))}
        </div>
      </InfiniteScroll>
    </React.Fragment>
  );
};

export default Home;
