import { useEffect } from 'react';
import useApp from './hooks/useApp';

const Success = () => {
  const { setToken } = useApp();

  console.log('here...');

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get('token');

    if (token) {
      setToken(token);
      window.location.href = '/home';
    }
  }, [setToken]);

  return <div>Logging you in...</div>;
};

export default Success;
