import Logo from '../logo/logo';
import ShareButtons from '../share-buttons/share-buttons';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <div>
      <h3 className="footer__title">Integrantes</h3>
      <p className="footer__name">Alicia Rebollo</p>
      <p className="footer__name">Carlos de Vega</p>
      <p className="footer__name">Daniel Vinyas</p>
    </div>

    <ShareButtons isFooter />

    <Logo isWhite={ true } isSmall={ true } />
  </div>
);

export default Footer;
