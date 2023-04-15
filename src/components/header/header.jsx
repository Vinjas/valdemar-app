import { Favorite, Person, Search } from '@mui/icons-material';
import { Button, InputAdornment, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import './header.scss';

const Header = () => (
  <div className="header">
    <Logo />

    <div className="header__right">
      <TextField id="outlined-basic"
          className="header__search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }} />
      <Link className="header__link" to="/">Colecciones</Link>
      <Button className="header__list" variant="contained">
        <Favorite fontSize="small" />
        <p>Tu lista</p>
      </Button>
      <Button className="header__login" variant="outlined">
        <Person fontSize="small" />
        <p>Perfil</p>
      </Button>
    </div>

  </div>
);

export default Header;
