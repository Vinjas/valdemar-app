import PropTypes from 'prop-types';
import valdemarImg from '../../imgs/Valdemar-cabra.png';
import './logo.scss';

const Logo = ({ isWhite }) => (
  <div className="logo">
    <img className={ `logo__img ${ isWhite && 'logo__img--white' }` } alt="logo" src={ valdemarImg } />
    <span className={ `logo__title ${ isWhite && 'logo__title--white' }` }>Valdemar</span>
  </div>
);

export default Logo;

Logo.propTypes = {
  isWhite: PropTypes.bool
};
