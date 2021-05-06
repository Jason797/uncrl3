import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


// components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import News from './components/pages/news';
import Teams from './components/pages/teams';
import PlayerList from './components/pages/playerList';

import './Assets/css/app.css'


function App() {
  return (
    <Router>
    <div className="App">
      <Header />


      <Route exact path='/' component={Homepage} />
      <Route exact path='/News' component={News} />
      <Route exact path='/Teams' component={Teams} />
      <Route exact path='/Player List' component={PlayerList} />


      <Footer />

    </div>
    </Router>
  );
}

export default App;
