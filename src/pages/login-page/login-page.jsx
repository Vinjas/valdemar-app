import { useEffect } from 'react';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
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

  return (
    <div className="login-page">
      <div className="login-page__left">
        <h2 className="login-page__title">Date de alta</h2>
        <p className="login-page__description">Date de alta en tu cuenta de Valdemar para empezar a contruir tus colecciones y listas de deseados.</p>

        <form className="login-page__form">
          <Input id="login-username"
              label="Usuario"
              required />
          <div className="login-page__form--separator" />
          <Input id="login-password"
              label="Password"
              type="password"
              required />
          <div className="login-page__form--separator" />
          <Button label="Date de Alta" disabled={ false } type="primary" />
          <span className="login-page__title--secondary">¿Todavía no tienes cuenta?</span>
          <span className="login-page__description login-page__description--secondary">Regístrate para disfrutar de todas las ventajas de Valdemar y enterarte de todas las novedades.</span>
          <Button label="Crea tu cuenta" disabled={ false } type="secondary" />
        </form>

      </div>
      <div className="login-page__right" />
    </div>
  );
};

export default LoginPage;
