import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import valdemarImg from '../../imgs/Valdemar-cabra.png';
import './logo.scss';

const Logo = ({ isWhite, isSmall }) => (
  <Link to="/" className={ `logo ${ isWhite && 'logo--white' }` }>
    <img className={ `logo__img ${ isWhite && 'logo__img--white' }` } alt="logo" src={ valdemarImg } />
    <span className={ `logo__title ${ isSmall && 'logo__title--small' }` }>Valdemar</span>
  </Link>
);

export default Logo;

Logo.propTypes = {
  isWhite: PropTypes.bool,
  isSmall: PropTypes.bool
};
