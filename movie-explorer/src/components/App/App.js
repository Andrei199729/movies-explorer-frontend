import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error from '../Error/Error';

function App() {
  const location = useLocation();

  const pathHeadersArray = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
  ];
  const pathFootersArray = [
    '/',
    '/movies',
    '/saved-movies',
  ];
  const pathHeaders = pathHeadersArray.includes(location.pathname);
  const pathFooters = pathFootersArray.includes(location.pathname);
  return (
    <>
      {!pathHeaders ? null : <Header />}
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/movies" component={Movies} />
        <Route path="/saved-movies" component={SavedMovies} />
        <Route path="/profile" component={Profile} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={Register} />
        <Route path="*" component={Error} />
      </Switch>
      {!pathFooters ? null : <Footer />}
    </>
  );
}

export default App;
