import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { postLogin, postRegister } from '../../services/auth';
import { EMAIL_REGEX, JWT_TOKEN, PASSWORD_REGEX, USERNAME_CHARACTERS } from '../../services/constants';
import './register-page.scss';
import { LoginContext } from '../../context/loginContext';

const RegisterPage = () => {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    document.documentElement.style.backgroundColor = '#fff';

    return () => {
      document.body.style.backgroundColor = '#f6f6f6';
      document.documentElement.style.backgroundColor = '#f6f6f6';
    };
  }, []);

  const [ form, setForm ] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [ isFormError, setIsFormError ] = useState(false);
  const [ isUserError, setIsUserError ] = useState(false);
  const [ isEmailError, setIsEmailError ] = useState(false);
  const [ isPasswordError, setIsPasswordError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  function validateForm() {
    setIsUserError(false);
    setIsEmailError(false);
    setIsPasswordError(false);

    let isError = false;

    if (form?.name.length <= USERNAME_CHARACTERS.min || form?.name.length > USERNAME_CHARACTERS.max) {
      setIsUserError(true);

      isError = true;
    }

    if (!EMAIL_REGEX.test(form?.email)) {
      setIsEmailError(true);

      isError = true;
    }

    if (!PASSWORD_REGEX.test(form?.password)) {
      setIsPasswordError(true);

      isError = true;
    }

    return isError;
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (validateForm(form)) {
      return;
    }

    try {
      await postRegister(form);
      const { data } = await postLogin(form);

      setIsLoggedIn(true);

      localStorage.setItem(JWT_TOKEN, data?.token);

      navigate('/profile');
    } catch (error) {
      setIsFormError(true);
      setErrorMessage(error);
    }
  }

  return (
    <div className="register-page">
      <div className="register-page__left">
        <h2 className="register-page__title">Regístrate</h2>
        <p className="register-page__description">Crea tu cuenta en Valdemar para empezar a contruir tus colecciones y listas de deseados.</p>

        <form className="register-page__form" onSubmit={ handleSubmit }>
          <Input id="register-username"
              label="Usuario"
              error={ isUserError }
              helperText={ isUserError ? 'Introduce un nombre de usuario entre 3 y 16 caracteres' : '' }
              value={ form?.name }
              required
              onChange={ (e) => {
                setForm({ ...form, name: e.target.value });
              } } />
          <div className="register-page__form--separator" />
          <Input id="email-password"
              label="Email"
              error={ isEmailError }
              helperText={ isEmailError ? 'Introduce un email válido' : '' }
              value={ form?.email }
              required
              edge="end"
              onChange={ (e) => {
                setForm({ ...form, email: e.target.value });
              } } />
          <div className="register-page__form--separator" />
          <Input id="register-password"
              label="Password"
              error={ isPasswordError }
              helperText={ isPasswordError ? 'Mínimo ocho caracteres, al menos una letra y un número:' : '' }
              isPassword={ true }
              type="password"
              value={ form?.password }
              required
              onChange={ (e) => {
                setForm({ ...form, password: e.target.value });
              } } />
          <div className="register-page__form--separator" />
          <Button label="Regístrate" disabled={ false } type="primary" />
        </form>

        {
          isFormError && (
            <div className="register-page__error">
              { `Se ha producido un error: \n ${ errorMessage }` }
            </div>
          )
        }

      </div>
      <div className="register-page__right" />
    </div>
  );
};

export default RegisterPage;
