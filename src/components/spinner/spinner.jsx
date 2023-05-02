import { CircularProgress } from '@mui/material';
import './spinner.scss';

const Spinner = () => (
  <div className="spinner">
    <CircularProgress className="spinner__icon" color="inherit" />
  </div>
);

export default Spinner;
