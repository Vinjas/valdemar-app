import { useState, useEffect, useContext } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ShareButtons from '../../components/share-buttons/share-buttons';
import Button from '../../components/button/button';
import { getBook } from '../../services/books';
import { HTTP_OK, JWT_TOKEN, RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import './book-page.scss';
import Spinner from '../../components/spinner/spinner';
import { LoginContext } from '../../context/loginContext';
import { getUserWishlist, postAddBookToWishlist } from '../../services/wishlist';
import { getLogout } from '../../services/auth';
import { checkBookInWishlist } from '../../utils/checkBookInWishlist';

const BookPage = () => {
  const token = localStorage.getItem(JWT_TOKEN);

  const navigate = useNavigate();

  const { bookId } = useParams();

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const [ bookDetails, setBookDetails ] = useState({});
  const [ isErrorWishList, setIsErrorWishList ] = useState(false);
  const [ isInWishlist, setIsInWishlist ] = useState(false);

  const onSuccess = (data) => {
    if (data) {
      setBookDetails(data);
    }
  };

  const onWishlistSuccess = async ({ data, status }) => {
    if (status !== HTTP_OK) {
      await getLogout(token);

      localStorage.removeItem(JWT_TOKEN);
      setIsLoggedIn(false);
    }

    if (data) {
      const isBookInWishlist = checkBookInWishlist(data, bookId);

      setIsInWishlist(isBookInWishlist);
    }
  };

  const { isError, isLoading } = useQuery({
    queryKey: RQ_KEY.BOOKS_LIST_BY_COLLECTION,
    queryFn: () => getBook(bookId),
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  useQuery({
    queryKey: RQ_KEY.USER_WISHLIST,
    queryFn: getUserWishlist,
    onSuccess: onWishlistSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    document.documentElement.style.backgroundColor = '#fff';

    return () => {
      document.body.style.backgroundColor = '#f6f6f6';
      document.documentElement.style.backgroundColor = '#f6f6f6';
    };
  }, []);

  const {
    isbn,
    title,
    description,
    date,
    image,
    author,
    collection,
    genres
  } = bookDetails;

  async function handleWishlist() {
    try {
      await postAddBookToWishlist(isbn);

      setIsInWishlist(true);
    } catch (error) {
      setIsErrorWishList(true);
    }
  }

  return (
    <>
      { bookDetails && !isLoading && (
      <div className="book-page">
        <div className="book-page__left">
          <h2 className="book-page__left__author">{ author?.name }</h2>
          <h3 className="book-page__left__title">{ title }</h3>
          <p className="book-page__left__description">{ description }</p>

          { isLoggedIn && !isInWishlist && (
            <Button className={ isInWishlist ? 'book-page__left__wishlist-message' : 'book-page__left__button' }
                label={ isInWishlist ? 'En mi lista' : 'Añadir a tu lista' }
                type="primary"
                disabled={ isInWishlist }
                onClick={ handleWishlist } />
          ) }

          { isInWishlist &&
            <div className="book-page__left__wishlist-message">En mi lista</div>
          }

          <ShareButtons />
        </div>
        <div className="book-page__right">
          <div className="book-page__right__img--container">
            <img className="book-page__right__img" alt={ title } src={ image } />
          </div>
          <div className="book-page__right__content">
            <Link className="book-page__right__content--collection"
                to={ `/collections/${ collection?.id }` }>
              { collection?.name }
            </Link>
            {
              genres?.map((genre) => (
                <p key={ genre?.name }
                    className="book-page__right__content--genre">
                  { genre?.name }
                </p>
              ))
            }
            <div className="book-page__right__content--title">Año:</div>
            <span className="book-page__right__content--value">{ date }</span>

            <div className="book-page__right__content--title">ISBN:</div>
            <span className="book-page__right__content--value">{ isbn }</span>
          </div>
        </div>
      </div>
      ) }
      { isLoading && <Spinner /> }
      {
        (isError || isErrorWishList) &&
          <p style={{ color: 'red' }}>Ha habido un error</p>
      }
    </>
  );
};

export default BookPage;
