import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import BookCard from '../../components/book-card/book-card';
import { getBooksByCollection } from '../../services/books';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import './book-list-by-collection.scss';

const BookListByCollection = () => {
  const { collectionId } = useParams();

  const [ bookList, setBookList ] = useState([]);

  const onSuccess = (data) => {
    if (data) {
      setBookList(data);
    }
  };

  const { data: bookListData, isError, isLoading } = useQuery({
    queryKey: RQ_KEY.BOOKS_LIST_BY_COLLECTION,
    queryFn: () => getBooksByCollection(collectionId),
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  return (
    <>
      <h1 className="collection__title">
        { bookList[0]?.collection?.name }
      </h1>
      <div className="collection__book-list">
        { bookList && bookList?.map(({ title, author, date, image, price, isbn }) => (
          <BookCard key={ title }
              title={ title }
              author={ author?.name }
              date={ date }
              image={ image }
              price={ price }
              isbn={ isbn } />
        )) }
      </div>

    </>
  );
};

export default BookListByCollection;

