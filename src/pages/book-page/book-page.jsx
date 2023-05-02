import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import ShareButtons from '../../components/share-buttons/share-buttons';
import Button from '../../components/button/button';
import { getBook } from '../../services/books';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import './book-page.scss';
import Spinner from '../../components/spinner/spinner';

const BookPage = () => {
  const { bookId } = useParams();

  const [ bookDetails, setBookDetails ] = useState({});

  const onSuccess = (data) => {
    if (data) {
      setBookDetails(data);
    }
  };

  const { data: bookListData, isError, isLoading } = useQuery({
    queryKey: RQ_KEY.BOOKS_LIST_BY_COLLECTION,
    queryFn: () => getBook(bookId),
    onSuccess,
    enabled: true,
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
    price,
    author,
    collection,
    genres
  } = bookDetails;

  return (
    <>
      { bookDetails && !isLoading && (
      <div className="book-page">
        <div className="book-page__left">
          <h2 className="book-page__left__author">{ author?.name }</h2>
          <h3 className="book-page__left__title">{ title }</h3>
          <p className="book-page__left__description">{ description }</p>
          <Button className="book-page__left__button" label="Añadir a tu lista" type="primary" />
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

            <div className="book-page__right__content--title">Precio:</div>
            <span className="book-page__right__content--value">{ `${ price } €` }</span>
          </div>
        </div>
      </div>
      ) };
      { isLoading && <Spinner /> }
      { isError && <p>Ha habido un error</p> }
    </>
  );
};

export default BookPage;
