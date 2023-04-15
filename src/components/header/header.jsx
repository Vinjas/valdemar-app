import { Favorite, Person, Search } from '@mui/icons-material';
import { Button, InputAdornment, TextField } from '@mui/material';
import Logo from '../logo/logo';
import './header.scss';

const Header = () => (
  <div className="header">
    <Logo />

    <div className="header__right">
      <TextField id="outlined-basic"
          label="Outlined"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }} />
      <p>Header</p>
      <Button variant="contained">
        <Favorite fontSize="small" />
        <p>Tu lista</p>
      </Button>
      <Button variant="outlined">
        <Person fontSize="small" />
        <p>Perfil</p>
      </Button>
    </div>

  </div>
);

export default Header;
