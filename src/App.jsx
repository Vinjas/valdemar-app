// import { QueryClientProvider } from '../queryClient';
import { QueryClient, QueryClientProvider } from 'react-query';
import NotificationManager from './components/notification/notificacion-manager';
import Routes from './routes/routes';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={ queryClient }>
    <NotificationManager />
    <Routes />
  </QueryClientProvider>
);

export default App;
