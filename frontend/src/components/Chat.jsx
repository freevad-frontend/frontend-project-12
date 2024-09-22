import { useNavigate } from 'react-router-dom';

const getAuthHeader = () => {
  const userId = JSON.parse(localStorage.getItem('userId'));

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

const Chat = () => {
  const navigate = useNavigate();
  const token = getAuthHeader(navigate);
  if (token == null) {
    navigate('/login');
  }

  const test = 'test2';
  return (
    <p>{test}</p>
  );
};

export default Chat;
