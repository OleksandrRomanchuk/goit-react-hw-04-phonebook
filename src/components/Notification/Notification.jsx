//========== helpers ==========
import PropTypes from 'prop-types';

//========== styles ==========
import { NotifyMessage } from './Notification.styled';

export function Notification({ message }) {
	return <NotifyMessage>{message}</NotifyMessage>;
}

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};
