import { Favorite, Person, Search } from '@mui/icons-material';
import { Button, InputAdornment, TextField } from '@mui/material';
import { Link, useMatch } from 'react-router-dom';
import Logo from '../logo/logo';
import './header.scss';

const Header = () => {
  const match = useMatch({ path: '/', exact: true });
  const isHomePage = match !== null;

  return (
    <div className={ `header ${ isHomePage && 'header--home' }` }>
      <Logo isWhite={ isHomePage } />

      <div className="header__right">
        <TextField id="outlined-basic"
            className={ `header__search ${ isHomePage && 'header__search--white' }` }
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              )
            }} />
        <Link className={ `header__link ${ isHomePage && 'header__link--white' }` } to="/collections">Colecciones</Link>
        <Button className={ `header__list ${ isHomePage && 'header__list--white' }` } variant="contained">
          <Favorite fontSize="small" />
          <p>Tu lista</p>
        </Button>
        <Button className={ `header__login ${ isHomePage && 'header__login--white' }` } variant="outlined">
          <Person fontSize="small" />
          <p>Perfil</p>
        </Button>
      </div>

    </div>
  );
};

export default Header;
