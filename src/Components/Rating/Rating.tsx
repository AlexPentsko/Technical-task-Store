import styles from '../FullProduct/FullProduct.module.scss';

const Rating = (rating: any) => {
  const fixedRating = Math.floor(rating.rating);
  const total = [1, 2, 3, 4, 5];

  return (
    <div>
      <ul className={styles.rating}>
        {total.slice(0, fixedRating).map((index) => (
          <li key={index}>
            <img src="/img/filled-star.svg" alt="filled star" />
          </li>
        ))}
        {total.slice(fixedRating, 5).map((index) => (
          <li key={index}>
            <img src="/img/empty-star.svg" alt="empty star" />
          </li>
        ))}

        <li className={styles.value}>{rating.rating}</li>
      </ul>
    </div>
  );
};

export default Rating;
