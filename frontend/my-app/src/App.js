import React from 'react';


import AddItemPage from './Compo/AddItemPage'
import ListPage from './Compo/ListPage'
import MouseKey from './Compo/MouseKey'




function App() {
  return (
    <div className="container">
      <MouseKey/>
      <ListPage />
      <AddItemPage />
    </div>
  );
}

export default App
