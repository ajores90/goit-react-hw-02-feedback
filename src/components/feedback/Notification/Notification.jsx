import PropTypes from 'prop-types';
import { NotificationWrapper, Message } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationWrapper>
      <Message>{message}</Message>
    </NotificationWrapper>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
