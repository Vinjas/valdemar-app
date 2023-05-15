import { TextField, Input as PasswordInput, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ id, label, required, type, onChange, value, error, helperText }) => (
  <TextField id={ id }
      className="input"
      label={ label }
      required={ required }
      variant="standard"
      type={ type }
      fullWidth
      value={ value }
      error={ error }
      helperText={ helperText }
      onChange={ onChange } />
);

export default Input;

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string
};
