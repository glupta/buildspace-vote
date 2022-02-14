import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import CreateProposal from './page/CreateProposal';
import ViewProposal from './page/ViewProposal';

const AppRouter = (props) => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route exact path='/' element={< LandingPage connectWallet={props.connectWallet}/>}></Route> */}
          <Route exact path='/' element={< LandingPage />}></Route>
         <Route exact path='/createProposal' element={< CreateProposal />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;