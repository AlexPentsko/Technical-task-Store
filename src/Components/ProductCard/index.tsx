import { Link } from 'react-router-dom';
import './ProductCard.scss';

type ProductCardType = {
  id: number;
  title: string;
  description: string;
  price: number;
  sale: number;
  imageUrl: string;
};

const ProductCard = ({ id, title, description, price, sale, imageUrl }:ProductCardType) => {
  return (
    <div className="product__block">
      <div className="product__container">
        <div className="product__img">
          <Link to={`/products/${id}`}>
            <img className="img" src={imageUrl} alt="iPhone 9 image"></img>
            <div className="sale">{sale}%</div>
          </Link>
        </div>
        <div className="details">
          <div className="info">
            <h2>{title}</h2>
            <h4>{description}</h4>
          </div>
          <div className="price">${price}</div>
        </div>
        <Link to={`/products/${id}`}>
          <button className="details__button">see details</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
