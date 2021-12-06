import React from 'react';
import {BrowserRouter, Routes, Route, Link}  from 'react-router-dom' 
// import Header from './components/header'
// import Body from './components/body';
// import Input from './components/txt'
// import Clas from './components/class';

function App() {
  const [isView, setView] = React.useState(true);


  return (
    <div className="block">
      <BrowserRouter>
          <Link to='/'>на главную</Link> 
          <Link to='/news'>на новости</Link>
          <Link to='/about'>на о сайте</Link>
          <Routes>
            <Route path="/" element={<div>главная</div>}/>
            <Route path="/news" element={<div>новостит</div>}/>
            <Route path="/about" element={<div>о сайте</div>}/>
          </Routes>
       </BrowserRouter>

    </div>

  );
}

export default App;
