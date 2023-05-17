import { useState } from 'react';
import './wishlist-item.scss';
import { Link } from 'react-router-dom';
import Button from '../button/button';
import { deleteBookFromWishlist } from '../../services/wishlist';

const WishlistItem = ({ wishlistItem, onDelete }) => {
  const { isbn, title, date, image, author, collection, genres } = wishlistItem;

  const [ isErrorDelete, setIsErrorDelete ] = useState(false);

  async function handleRemove() {
    try {
      await deleteBookFromWishlist(isbn);

      onDelete(wishlistItem);
    } catch (error) {
      setIsErrorDelete(true);
    }
  }

  return (
    <>
      <div className="wishlist-item">

        <div className="wishlist-item__section">
          <Link to={ `/book/${ isbn }` }>
            <img className="wishlist-item__img"
                alt={ title }
                src={ image } />
          </Link>
          <div className="wishlist-item__info">
            <div className="wishlist-item__info--author">{ author?.name }</div>
            <div className="wishlist-item__info--title">{ title }</div>
            <div className="wishlist-item__info--date">{ date }</div>
            <div className="wishlist-item__info--isbn">{ isbn }</div>
          </div>
        </div>

        <div className="wishlist-item__section">
          <div className="wishlist-item__collection">
            <Link className="wishlist-item__collection--collection" to={ `/collections/${ collection?.id }` }>
              <div className="wishlist-item__collection--collection">{ collection?.name }</div>
            </Link>
            <div className="wishlist-item__collection--genres">
              {
                genres?.map((genre) => (
                  <div key={ genre?.name }
                      className="wishlist-item__collection--genres__single">
                    { genre?.name }
                  </div>
                ))
              }
            </div>
          </div>

          <div className="wishlist-item__buttons">
            <Button label="Quitar"
                className="wishlist-item__buttons--secondary"
                type="secondary"
                onClick={ handleRemove } />
            <a href={ `https://www.amazon.es/s?k=${ isbn.replace(/-/g, '') }` }
                target="_blank"
                rel="noreferrer">
              <Button label="Comprar"
                  type="primary" />
            </a>
          </div>
        </div>

      </div>

      <div className="wishlist-page__separator" />

      {
        isErrorDelete &&
          <div>Se ha producido un error</div>
      }
    </>
  );
};

export default WishlistItem;
