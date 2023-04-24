import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ id, label, required, type }) => (
  <TextField id={ id }
      className="input"
      label={ label }
      required={ required }
      variant="standard"
      type={ type }
      fullWidth />
);

export default Input;
