import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { randomizeResult } from '../../utils/randomizeResult';
import { getAllCollections } from '../../services/collections';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import './home.scss';

const Home = () => {
  const imgOne = require('../../imgs/background_1.png');
  const imgTwo = require('../../imgs/background_2.png');
  const imgThree = require('../../imgs/background_3.png');
  const imgFour = require('../../imgs/background_4.png');

  const images = [ imgOne, imgTwo, imgThree, imgFour ];

  const maxItems = 4;

  const onSuccess = (data) => {
    if (data) {
      const randomBooks = randomizeResult(data, maxItems);

      setBookList(randomBooks);
    }
  };

  useQuery({
    queryKey: RQ_KEY.ALL_COLLECTIONS,
    queryFn: getAllCollections,
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  const [ bookList, setBookList ] = useState([]);

  function Item({ name, id }) {
    return (
      <div className="home-books">
        <img className="home-books__img" alt="home-img" src={ images[Math.floor(Math.random() * images.length)] } />
        <div className="home-books__content">
          <div className="home-books__subtitle">Las mejores colecciones:</div>

          <h2 className="home-books__title">{ name }</h2>
          <Link to={ `/collections/${ id }` }
              className="home-books__button">
            Ver detalles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Carousel className="home-container"
        maxItems={ maxItems }
        indicators={ false }
        interval={ 9000 }
        navButtonsAlwaysVisible={ false }
        swipe={ false }
        duration={ 1000 }
        stopAutoPlayOnHover={ false }>
      { bookList.map((book) => (
        <Item key={ book?.id }
            name={ book?.name }
            id={ book?.id } />
      )) }
    </Carousel>
  );
};

export default Home;
