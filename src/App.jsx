import React from "react";

import {useDispatch, useSelector} from 'react-redux';

import {fetchDataAction} from "./redux/actions"


function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state)

  const fetchDataHandler = () => {
    dispatch(fetchDataAction());
  };

  return (
    <div>
      <button onClick={fetchDataHandler}>Получить данные</button>
      <hr />
      {state.fetchDataLoading && <div>loading...</div>}
      {state.fetchData && !state.fetchDataLoading && <div>{state.fetchData.title}</div>}
      {state.fetchDataError && !state.fetchDataLoading && <div>error!</div>}
    </div>
  );
}

export default App;