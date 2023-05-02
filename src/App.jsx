// import { QueryClientProvider } from '../queryClient';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from './routes/routes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={ queryClient }>
    <Routes />
  </QueryClientProvider>
);

export default App;
