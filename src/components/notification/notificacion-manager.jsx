import { useEffect } from 'react';
import useNotify from '../../hooks/useNotification';
import Notification from './notification';
import { notificationTimeOut } from './constans';

const NotificationManager = () => {
  const { notification, closeNotification } = useNotify();

  useEffect(() => {
    const timeout = setTimeout(() => {
      closeNotification();
    }, notificationTimeOut);

    return () => clearTimeout(timeout);
  }, [ notification, closeNotification ]);

  return (
    <>
      { notification && (
        <div className="notification-manager">
          <Notification message={ notification } onClose={ closeNotification } />
        </div>
      ) }
    </>
  );
};

export default NotificationManager;
