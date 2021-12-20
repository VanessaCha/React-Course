import {Route, Routes} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigation from "./components/layout/MainNavigation";
import React from "react";



function App() {
  return <div>
      <MainNavigation/>
      <Routes>
          {/*<Route path="/" element={<App/>}/>*/}
          <Route path="/" element={<AllMeetupsPage/>}/>
          <Route path="/new-meetup" element={<NewMeetupPage/>}/>
          <Route path="/fav" element={<FavoritesPage/>}/>
      </Routes>
  </div>;
}

export default App;
