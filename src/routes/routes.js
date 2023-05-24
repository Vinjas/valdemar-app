import { useContext } from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Navigate
} from 'react-router-dom';
import { CollectionsList } from '../pages/collections-list/collections-list';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Home from '../pages/home/home';
import LoginPage from '../pages/login-page/login-page';
import BookListByCollection from '../pages/book-list-by-collection/book-list-by-collection';
import BookPage from '../pages/book-page/book-page';
import RegisterPage from '../pages/register-page/register-page';
import ProfilePage from '../pages/profile-page/profile-page';
import { LoginContext } from '../context/loginContext';
import WishlistPage from '../pages/wishlist-page/wishlist-page';
import SearchPage from '../pages/search-page/search-page';

const Routes = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <Navigate to="/" replace /> } />
        <Route path="/collections" element={ <CollectionsList /> } />
        <Route path="/collections/:collectionId" element={ <BookListByCollection /> } />
        <Route path="/book/:bookId" element={ <BookPage /> } />
        <Route path="/login" element={ isLoggedIn ? <ProfilePage /> : <LoginPage /> } />
        <Route path="/register" element={ isLoggedIn ? <ProfilePage /> : <RegisterPage /> } />
        <Route path="/profile" element={ isLoggedIn ? <ProfilePage /> : <LoginPage /> } />
        <Route path="/wishlist" element={ <WishlistPage /> } />
        <Route path="/search/:searchInput" element={ <SearchPage /> } />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
