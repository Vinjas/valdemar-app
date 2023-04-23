import { Link } from 'react-router-dom';
import { normalizeString } from '../../utils/normalizeString';
import './collection-card.scss';

const CollectionCard = ({ collectionName, collectionId }) => (
  <Link className="collection-container" to={ collectionId }>
    <h2 className="collection-container__title">{ collectionName }</h2>
    <div className="collection-container__element" />
    <p className="collection-container__subtitle">Ver libros</p>
  </Link>
);

export default CollectionCard;
