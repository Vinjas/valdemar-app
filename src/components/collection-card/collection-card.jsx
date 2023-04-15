import { Link } from 'react-router-dom';

const CollectionCard = ({ collectionName }) => (
  <Link to="me">
    <div className="card-container">
      <h2>{ collectionName }</h2>
    </div>
  </Link>
);

export default CollectionCard;
