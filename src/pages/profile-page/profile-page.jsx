import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import { getLogout } from '../../services/auth';
import './profile-page.scss';
import { LoginContext } from '../../context/loginContext';

const ProfilePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  const [ isError, setIsError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }

    document.body.style.backgroundColor = '#fff';
    document.documentElement.style.backgroundColor = '#fff';

    return () => {
      document.body.style.backgroundColor = '#f6f6f6';
      document.documentElement.style.backgroundColor = '#f6f6f6';
    };
  }, []);

  async function handleLogOut() {
    try {
      setIsError(false);
      setErrorMessage('');

      await getLogout(token);

      setIsLoggedIn(false);

      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      setIsError(true);
      setErrorMessage(`Se ha producido un error: ${ error }`);
    }

    return null;
  }

  return (
    <div className="profile-page">
      <div className="profile-page__left">
        <h2 className="profile-page__title">Mi Perfil</h2>
        <p className="profile-page__description">Consulta tu perfil</p>

        <div className="profile-page__form--separator" />
        <Button label="Cerrar Sesión" disabled={ false } type="primary" onClick={ handleLogOut } />
        {
          isError && (
            <div className="profile-page__error">
              { errorMessage }
            </div>
          )
        }
      </div>

      <div className="profile-page__right" />
    </div>
  );
};

export default ProfilePage;
