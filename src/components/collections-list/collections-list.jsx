
import { useQuery } from 'react-query';
import { getAllCollections } from '../../services/collections';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import useNotify from '../../hooks/useNotification';
import CollectionCard from '../collection-card/collection-card';
import './collections-list.scss';

export const CollectionsList = () => {
  const { notify } = useNotify();

  const handleError = (error) => {
    notify(error);
  };
  const onSuccess = () => {
    notify('Test notification');
  };

  const { data: collectionsData, isError, isLoading } = useQuery({
    queryKey: RQ_KEY.ALL_COLLECTIONS,
    queryFn: getAllCollections,
    onError: handleError,
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  return (
    <>
      <h1 className="collections-list-container__title">Collections</h1>
      <div className="collections-list-container">
        { collectionsData?.map((collection) =>
          <CollectionCard key={ collection?.id } collectionName={ collection?.name } collectionId={ collection?.id } />)
        }
      </div>
    </>
  );
};
