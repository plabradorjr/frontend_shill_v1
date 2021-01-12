import React from 'react';
//components and pages
import Home from './pages/Home';
import Comments from './pages/Comments';
import bagChamath from './pages/bagChamath';
import bagWsb from './pages/bagWsb';
import bag10x from './pages/bag10x';
import bagGlobal from './pages/bagGlobal';
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
      <Route path="/bag/chamath" exact component={bagChamath}></Route>
      <Route path="/bag/wallstreetbets" exact component={bagWsb}></Route>
      <Route path="/bag/10x" exact component={bag10x}></Route>
      <Route path="/bag/global" exact component={bagGlobal}></Route>

    </div>
  )

}

export default App;