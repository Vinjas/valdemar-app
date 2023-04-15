import {
  BrowserRouter,
  Routes as Switch,
  Route
} from 'react-router-dom';
import { CollectionsList } from '../components/collections-list/collections-list';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Home from '../components/home/home';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" element={ <Home /> } />
      <Route path="/collections" element={ <CollectionsList /> } />
      { /* <Route path="" element={<BookListByCollection />} /> */ }
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
