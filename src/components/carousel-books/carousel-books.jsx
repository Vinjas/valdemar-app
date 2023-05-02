import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import { RQ_KEY, RQ_DEFAULT_OPTIONS } from '../../services/constants';
import { getAllBooks } from '../../services/books';
import { randomizeResult } from '../../utils/randomizeResult';
import './carousel-books.scss';

const CarouselBooks = ({ maxItems }) => {
  const imgOne = require('../../imgs/books_1.png');
  const imgTwo = require('../../imgs/books_2.png');
  const imgThree = require('../../imgs/books_3.png');
  const imgFour = require('../../imgs/books_4.png');
  const imgFive = require('../../imgs/books_5.png');
  const imgSix = require('../../imgs/books_6.png');

  const images = [ imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix ];

  const onSuccess = (data) => {
    if (data) {
      const randomBooks = randomizeResult(data, maxItems);

      setBookList(randomBooks);
    }
  };

  const onError = (error) => {
    console.error('Error al cargar las colecciones', error);
    setBookList([]);
  };

  useQuery({
    queryKey: RQ_KEY.ALL_BOOKS,
    queryFn: getAllBooks,
    onError,
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  const [ bookList, setBookList ] = useState([]);

  function Item({ name, description, isbn }) {
    return (
      <div className="carousel-books">
        <img className="carousel-books__img" alt="carousel-img" src={ images[Math.floor(Math.random() * images.length)] } />
        <div className="carousel-books__content">
          <h2 className="carousel-books__title">{ name }</h2>
          <p className="carousel-books__description">{ description }</p>
          <Link to={ `/book/${ isbn }` }
              className="carousel-books__button">
            Ver detalles
          </Link>
        </div>
      </div>
    );
  }

  Item.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    isbn: PropTypes.string
  };

  return (
    <Carousel className="carousel-container"
        maxItems={ maxItems }
        indicators={ false }
        interval={ 5000 }
        stopAutoPlayOnHover={ false }>
      { bookList.map((book) => (
        <Item key={ book?.isbn }
            name={ book?.title }
            description={ book?.description }
            isbn={ book?.isbn } />
      )) }
    </Carousel>
  );
};

export default CarouselBooks;

CarouselBooks.propTypes = {
  maxItems: PropTypes.number
};
