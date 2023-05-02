import {
  BrowserRouter,
  Routes as Switch,
  Route
} from 'react-router-dom';
import { CollectionsList } from '../pages/collections-list/collections-list';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Home from '../pages/home/home';
import LoginPage from '../pages/login-page/login-page';
import BookListByCollection from '../pages/book-list-by-collection/book-list-by-collection';
import BookPage from '../pages/book-page/book-page';
import Spinner from '../components/spinner/spinner';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" element={ <Home /> } />
      <Route path="/collections" element={ <CollectionsList /> } />
      <Route path="/collections/:collectionId" element={ <BookListByCollection /> } />
      <Route path="/book/:bookId" element={ <BookPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/loading" element={ <Spinner /> } />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
