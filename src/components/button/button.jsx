import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ label, disabled, type }) => (
  <button className={ `button button__${ type }` }
      disabled={ disabled }>
    { label }
  </button>
);

export default Button;

Button.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string
};
