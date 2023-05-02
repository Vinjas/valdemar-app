import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import { getAllCollections } from '../../services/collections';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import { randomizeResult } from '../../utils/randomizeResult';
import './home.scss';

const Home = () => {
  const imgOne = require('../../imgs/background_4.png');
  const imgTwo = require('../../imgs/background_3.png');
  const imgFour = require('../../imgs/background_1.png');

  const images = [ imgOne, imgTwo, imgFour ];

  const maxCollections = 3;

  const [ collectionsList, setCollectionsList ] = useState([]);

  const onSuccess = (data) => {
    if (data) {
      const collections = randomizeResult(data, maxCollections);

      collections.forEach((item, i) => {
        const imageIndex = i % images.length;

        item.img = images[imageIndex];
      });

      setCollectionsList(collections);
    }
  };

  const { isError, isLoading } = useQuery({
    queryKey: RQ_KEY.ALL_COLLECTIONS,
    queryFn: getAllCollections,
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  return (
    <ParallaxProvider>
      { collectionsList.map((collection) => (
        <ParallaxBanner className="home__parallax-banner"
            key={ collection?.img }
            layers={ [
              {
                image: collection?.img,
                amount: 0.6
              }
            ] }>
          <h1 className="home__parallax-title">{ collection?.name }</h1>
          <Link to={ `/collections/${ collection?.id }` }
              className="home__parallax-button">
            Ver colección
          </Link>
        </ParallaxBanner>
      )) }
    </ParallaxProvider>
  );
};

export default Home;
