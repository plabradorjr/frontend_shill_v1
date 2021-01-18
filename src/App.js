import React from 'react';
//components and pages
import Home from './pages/Home';
import Comments from './pages/Comments';
import BagChamath from './pages/bagChamath';
import bagWsb from './pages/bagWsb';
import BagExchange from './pages/bagHouse';
import BagGlobal from './pages/bagGlobal';
// styles
import GlobalStyles from './components/GlobalStyles';
import {Route} from 'react-router-dom';

function App() {
  
  return (
    <div className='app'>
      <GlobalStyles />
      <Route path={["/coin/:id", "/"]} exact>
        <Home />
      </Route>
      <Route path="/shills" exact component={Comments}></Route>
      <Route path="/bag/chamath" exact component={BagChamath}></Route>
      <Route path="/bag/wallstreetbets" exact component={bagWsb}></Route>
      <Route path="/bag/exchange" exact component={BagExchange}></Route>
      <Route path="/bag/global" exact component={BagGlobal}></Route>

    </div>
  )

}

export default App;