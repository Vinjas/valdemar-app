import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { LoginContext } from '../../context/loginContext';
import Button from '../../components/button/button';
import './wishlist-page.scss';
import { HTTP_OK, JWT_TOKEN, RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import { getUserWishlist } from '../../services/wishlist';
import { getLogout } from '../../services/auth';
import WishlistItem from '../../components/wishlist-item/wishlist-item';

const WishlistPage = () => {
  const token = localStorage.getItem(JWT_TOKEN);

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const navigate = useNavigate();

  const [ wishlist, setWishlist ] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    document.documentElement.style.backgroundColor = '#fff';

    return () => {
      document.body.style.backgroundColor = '#f6f6f6';
      document.documentElement.style.backgroundColor = '#f6f6f6';
    };
  }, []);

  const onSuccess = async ({ data, status }) => {
    if (status !== HTTP_OK) {
      await getLogout(token);

      localStorage.removeItem(JWT_TOKEN);
      setIsLoggedIn(false);
    }

    if (data) {
      setWishlist(data);
    }
  };

  const handleError = (error) => {
    console.error('Error al cargar las colecciones', error);
    setWishlist([]);
  };

  useQuery({
    queryKey: RQ_KEY.USER_WISHLIST,
    queryFn: getUserWishlist,
    onError: handleError,
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  function handleLogin() {
    return navigate('/login');
  }

  function handleDeleteItem(itemToDelete) {
    const updatedWishlist = wishlist.filter(
      (wishlistItem) => wishlistItem.isbn !== itemToDelete.isbn
    );

    setWishlist(updatedWishlist);
  }

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-page__title">Mi lista de deseos</h1>

      { isLoggedIn && (
        <div className="wishlist-page__background">
          <div className="wishlist-page__wrapper">
            <div className="wishlist-page__item-count">{ `${ wishlist.length } libros` }</div>
            <div className="wishlist-page__separator" />
            {
              wishlist.map((wishlistItem) => (
                <WishlistItem key={ wishlistItem?.isbn }
                    wishlistItem={ wishlistItem }
                    onDelete={ handleDeleteItem } />
              ))
            }
          </div>
        </div>
      ) }

      { !isLoggedIn && (
        <div className="wishlist-page__background">
          <div className="wishlist-page__wrapper">
            <div className="wishlist-page__login-text">Inicia sesion para consultar y añadir libros a tu lista</div>
            <div className="wishlist-page__login-text--secondary">Solo te llevará unos minutos</div>
            <Button label="Inicia sesión"
                type="primary"
                disabled={ false }
                onClick={ handleLogin } />
          </div>
        </div>
      ) }
    </div>
  );
};

export default WishlistPage;
