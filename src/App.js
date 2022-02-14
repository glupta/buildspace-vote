import React, { useContext, useEffect } from 'react';
import Header from "./component/Header";
import AppRouter from "./AppRouter";
import useLoadProposals from './utils/useLoadProposals';
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const proposals = useLoadProposals();
  const { state } = useContext(UserContext);

  useEffect(() => {
    document.title = "Buildspace Vote";
    proposals.then((res) => {
      res.loadProposals(state.address);
    });
  }, [state.address, state.userVoteCount]);

  return (
    <>
      <Header />
      <AppRouter/>
    </>
  );
}

export default App;