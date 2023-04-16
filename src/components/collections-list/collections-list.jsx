import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useMatch } from 'react-router-dom';
import { getAllCollections } from '../../services/collections';
import { RQ_DEFAULT_OPTIONS, RQ_KEY } from '../../services/constants';
import useNotify from '../../hooks/useNotification';
import CollectionCard from '../collection-card/collection-card';
import './collections-list.scss';

export const CollectionsList = () => {
  const [ collectionsList, setCollectionsList ] = useState([]);

  const { notify } = useNotify();

  const handleError = (error) => {
    notify(error);
  };
  const onSuccess = (data) => {
    setCollectionsList(data);
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
      <div className="collections-list-container">
        { collectionsList?.map((collection) =>
          <CollectionCard key={ collection?.id } collectionName={ collection?.name } collectionId={ collection?.id } />)
        }
        { isLoading &&
          <p>Cargando...</p>
         }
        { isError &&
          <p>Ha habido un error al cargar las colecciones</p>
        }
      </div>
    </>
  );
};
