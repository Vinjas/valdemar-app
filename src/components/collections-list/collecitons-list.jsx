
import { useQuery } from 'react-query';
import { getAllCollections } from '../../services/collections';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import useNotify from '../../hooks/useNotification';

export const CollectionsList = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: RQ_KEY.ALL_COLLECTIONS,
    queryFn: getAllCollections(),
    onError: handleError,
    ...RQ_DEFAULT_OPTIONS
  });

  const { notify } = useNotify();

  const handleError = (error) => {
    notify(error);
  };

  console.log('data', data);

  return (
    <>
      <div>Collections</div>
    </>
  );
};
