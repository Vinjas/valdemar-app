import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ label, disabled, type, className, onClick }) => (
  <button className={ `button button__${ type } ${ className }` }
      disabled={ disabled }
      onClick={ onClick }>
    { label }
  </button>
);

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string
};
