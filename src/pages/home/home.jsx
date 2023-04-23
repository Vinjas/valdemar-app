import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import './home.scss';

const Home = () => {
  const imgOne = require('../../imgs/background_4.png');
  const imgTwo = require('../../imgs/background_3.png');
  const imgThree = require('../../imgs/background_2.png');
  const imgFour = require('../../imgs/background_1.png');

  const images = [ imgOne, imgTwo, imgThree, imgFour ];

  return (
    <ParallaxProvider>
      { images.map((image) => (
        <ParallaxBanner className="home__parallax-banner"
            key={ image }
            layers={ [
              {
                image,
                amount: 0.6
              }
            ] }>
          <h1 className="home__parallax-title">Libros</h1>
          <button className="home__parallax-button">
            Button
          </button>
        </ParallaxBanner>
      )) }
    </ParallaxProvider>
  );
};

export default Home;
