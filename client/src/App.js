import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import UpdateForm from './views/UpdateForm';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/products/:id" element={<Detail/>} />
        <Route path="/products/:id/edit" element={<UpdateForm/>} />
      </Routes>
    </div>
  );
}
export default App;


