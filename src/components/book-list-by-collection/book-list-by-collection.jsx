import { getBooksByCollection } from '../../services/books';
import { RQ_KEY } from '../../services/constants';

const BookListByCollection = ({ collectionId }) => {
  const { data: bookListData, isError, isLoading } = useQuery({
    queryKey: RQ_KEY.BOOKS_LIST_BY_COLLECTION,
    queryFn: getBooksByCollection(collectionId),
    /*
     * onError: handleError,
     * onSuccess,
     */
    ...RQ_DEFAULT_OPTIONS
  });
};

export default BookListByCollection;
