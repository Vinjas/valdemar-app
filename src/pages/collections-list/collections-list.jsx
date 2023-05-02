import { useState } from 'react';
import { useQuery } from 'react-query';
import { getAllCollections } from '../../services/collections';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import useNotify from '../../hooks/useNotification';
import CarouselBooks from '../../components/carousel-books/carousel-books';
import Spinner from '../../components/spinner/spinner';
import CollectionCard from '../../components/collection-card/collection-card';
import './collections-list.scss';

export const CollectionsList = () => {
  const [ collectionsList, setCollectionsList ] = useState([]);

  const { notify } = useNotify();

  const handleError = (error) => {
    console.error('Error al cargar las colecciones', error);
    setCollectionsList([]);
  };

  const onSuccess = (data) => {
    if (data) {
      setCollectionsList(data);
    }
  };

  const { isError, isLoading } = useQuery({
    queryKey: RQ_KEY.ALL_COLLECTIONS,
    queryFn: getAllCollections,
    onError: handleError,
    onSuccess,
    ...RQ_DEFAULT_OPTIONS
  });

  return (
    <>
      <h1 className="collections-list-container__title">Collections</h1>

      <CarouselBooks maxItems={ 4 } />

      { collectionsList && !isLoading && (
        <>
          <div className="collections-list-container">
            { collectionsList?.map((collection) => (
              <CollectionCard key={ collection?.id }
                  collectionName={ collection?.name }
                  collectionId={ collection?.id } />
            ))
          }
          </div>
        </>
      ) }
      { isLoading &&
        <Spinner />
      }
      { isError &&
        <p>Ha habido un error al cargar las colecciones</p>
      }
    </>
  );
};
