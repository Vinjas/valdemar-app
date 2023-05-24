/* eslint-disable no-magic-numbers */
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import BookCard from '../../components/book-card/book-card';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import { getAllBooks } from '../../services/books';
import './search-page.scss';

const SearchPage = () => {
  const { searchInput } = useParams();

  const [ results, setResults ] = useState([]);
  const [ books, setBooks ] = useState([]);

  const handleError = () => {
    setResults([]);
  };

  const onSuccess = (data) => {
    if (data) {
      setBooks(data);
    }
  };

  useEffect(() => {
    const filteredData = books.filter((book) => {
      const { title, author, collection } = book;
      const searchLowercase = searchInput.toLowerCase();

      return (
        (title && title.toLowerCase().includes(searchLowercase)) ||
       (author && author.name.toLowerCase().includes(searchLowercase)) ||
       (collection && collection.name.toLowerCase().includes(searchLowercase))
      );
    });

    setResults(filteredData);
  }, [ searchInput, books ]);

  const { isError, isLoading } = useQuery({
    queryKey: RQ_KEY.ALL_BOOKS,
    queryFn: getAllBooks,
    onError: handleError,
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  return (
    <div className="search-page">
      <div className="search-page__info">
        <div className="search-page__title">
          <span className="search-page__title--bold">{ results?.length }</span>
          <span> resultados para: </span>
          <span className="search-page__title--bold">{ searchInput }</span>
        </div>
      </div>

      { isLoading &&
        <Spinner />
      }

      { isError &&
        <p>Ha habido un error al cargar las colecciones</p>
      }

      { results.length === 0 &&
        <div className="search-page__no-results">Sin resultados</div>
      }

      { results.length > 0 && (
        <div className="collection__book-list">
          { results?.map(({ title, author, date, image, price, isbn }) => (
            <BookCard key={ title }
                title={ title }
                author={ author?.name }
                date={ date }
                image={ image }
                price={ price }
                isbn={ isbn } />
          )) }
        </div>
      ) }
    </div>
  );
};

export default SearchPage;
