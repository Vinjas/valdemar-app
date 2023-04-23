import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ShareButtons from '../../components/share-buttons/share-buttons';
import { getBook } from '../../services/books';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import './book-page.scss';

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
    ...RQ_DEFAULT_OPTIONS
  });

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    document.documentElement.style.backgroundColor = '#fff';
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
    <div className="book-page">
      <div className="book-page__left">
        <h2 className="book-page__left__author">{ author?.name }</h2>
        <h3 className="book-page__left__title">{ title }</h3>
        <p className="book-page__left__description">{ description }</p>
        <ShareButtons />
      </div>
      <div className="book-page__right">
        <div className="book-page__right__img--container">
          <img className="book-page__right__img" alt={ title } src={ image } />
        </div>
        <div>{ date }</div>
        <div>{ collection?.name }</div>

        {
          genres?.map((genre) =>
            <div key={ genre?.name }>{ genre?.name }</div>)
        }
      </div>
    </div>
  );
};

export default BookPage;
