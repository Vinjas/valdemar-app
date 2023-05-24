import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import PropTypes from 'prop-types';
import './share-buttons.scss';

const ShareButtons = ({ isFooter }) => {
  const url = window.location.href;

  const handleTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${ url }`);
  };

  const handleFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${ url }`);
  };

  const handleEmail = () => {
    window.location.href = `mailto:?subject=Valdemar&body=${ url }`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="share-buttons">
      <p className={ isFooter ? 'share-buttons__label share-buttons__label--footer' : 'share-buttons__label' }>Comparte</p>
      <div className={ isFooter ? 'share-buttons__list share-buttons__list--footer' : 'share-buttons__list' }>
        <TwitterIcon className="share-buttons__icon" onClick={ handleTwitter } />
        <FacebookIcon className="share-buttons__icon" onClick={ handleFacebook } />
        <EmailIcon className="share-buttons__icon" onClick={ handleEmail } />
        <LinkIcon className="share-buttons__icon" onClick={ handleCopy } />
      </div>
    </div>

  );
};

export default ShareButtons;

ShareButtons.propTypes = {
  isFooter: PropTypes.bool
};
