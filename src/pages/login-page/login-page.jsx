import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import { postLogin } from '../../services/auth';
import { EMAIL_REGEX } from '../../services/constants';
import './login-page.scss';

const LoginPage = () => {
  // const isAuth = false;

  useEffect(() => {
    document.body.style.backgroundColor = '#fff';
    document.documentElement.style.backgroundColor = '#fff';

    return () => {
      document.body.style.backgroundColor = '#f6f6f6';
      document.documentElement.style.backgroundColor = '#f6f6f6';
    };
  }, []);

  const [ form, setForm ] = useState({
    email: '',
    password: ''
  });
  const [ isFormError, setIsFormError ] = useState(false);
  const [ isEmailError, setIsEmailError ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  function validateForm() {
    setIsEmailError(false);
    setIsFormError(false);

    let isError = false;

    if (!EMAIL_REGEX.test(form?.email)) {
      setIsEmailError(true);
      setErrorMessage('Introduce un email válido');

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
      const { data, status } = await postLogin(form);

      console.log('status', status);
      console.log('data', data);

      if (status !== 200) {
        setIsFormError(true);
        setErrorMessage('El usuario o password no es correcto');

        return;
      }

      localStorage.setItem('token', data?.token);
    } catch (error) {
      setIsFormError(true);
      setErrorMessage('El usuario o password introducido no es correcto');
    }
  }

  return (
    <div className="login-page">
      <div className="login-page__left">
        <h2 className="login-page__title">Date de alta</h2>
        <p className="login-page__description">Date de alta en tu cuenta de Valdemar para empezar a contruir tus colecciones y listas de deseados.</p>

        <form className="login-page__form" onSubmit={ handleSubmit }>
          <Input id="login-username"
              label="Email"
              error={ isEmailError || isFormError }
              helperText={ isEmailError ? 'Introduce un email válido' : '' }
              required
              onChange={ (e) => {
                setForm({ ...form, email: e.target.value });
              } } />
          <div className="login-page__form--separator" />
          <Input id="login-password"
              label="Password"
              error={ isFormError }
              type="password"
              required
              onChange={ (e) => {
                setForm({ ...form, password: e.target.value });
              } } />
          <div className="login-page__form--separator" />
          <Button label="Date de Alta" disabled={ false } type="primary" />
          {
          isFormError && (
            <div className="login-page__error">
              { errorMessage }
            </div>
          )
        }
        </form>

        <div className="login-page__title--secondary">¿Todavía no tienes cuenta?</div>
        <div className="login-page__description login-page__description--secondary">Regístrate para disfrutar de todas las ventajas de Valdemar y enterarte de todas las novedades.</div>
        <Link to="/register" className="login-page__register-button">
          <Button label="Crea tu cuenta" disabled={ false } type="secondary" />
        </Link>

      </div>
      <div className="login-page__right" />
    </div>
  );
};

export default LoginPage;
