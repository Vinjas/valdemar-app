const Notification = ({ message, onClose }) => (
  <div className="notification">
    <p>{ message }</p>
    <button onClick={ onClose }>Cerrar</button>
  </div>
);

export default Notification;
