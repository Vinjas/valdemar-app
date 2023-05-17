import { Link } from 'react-router-dom';
import './book-card.scss';

export const BookCard = ({ title, author, date, image, price, isbn }) => (
  <Link to={ `/book/${ isbn }` } className="book-card">
    <img className="book-card__img"
        alt={ title }
        src={ image } />
    <div className="book-card__date">{ date }</div>
    <h3 className="book-card__title">
      { title }
    </h3>
    <div className="book-card__author">{ author }</div>

  </Link>
);

export default BookCard;
