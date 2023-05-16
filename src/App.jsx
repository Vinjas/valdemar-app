// import { QueryClientProvider } from '../queryClient';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect, useState } from 'react';
import { LoginContext } from './context/loginContext';
import Routes from './routes/routes';

const queryClient = new QueryClient();

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <QueryClientProvider client={ queryClient }>
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Routes />
      </LoginContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
