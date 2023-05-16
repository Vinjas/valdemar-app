import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../context/loginContext';
import Button from '../../components/button/button';

const WishlistPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const navigate = useNavigate();

  function handleLogin() {
    return navigate('/login');
  }

  return (
    <div>
      <h1>Wishlist</h1>

      { isLoggedIn &&
        <div>Tu Wishlist</div>
       }

      { !isLoggedIn && (
        <div>
          <h2>Inicia sesion para consultar y añadir libros a tu lista</h2>
          <Button label="Inicia sesión"
              type="primary"
              disabled={ false }
              onClick={ handleLogin } />
        </div>
      ) }
    </div>
  );
};

export default WishlistPage;
