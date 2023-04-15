import { useState } from 'react';

const useNotify = () => {
  const [ notification, setNotification ] = useState(null);

  const notify = (message) => {
    setNotification(message);
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return {
    notification,
    notify,
    closeNotification
  };
};

export default useNotify;
