import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  function toggleMenu() {
    setIsMenuCollapsed(!isMenuCollapsed);
  }

  return (
    <>
      <BrowserRouter>
        <Header toggleMenu={toggleMenu} />
        <main className='container'>
          <Aside collapsed={isMenuCollapsed} />
          <div className='routeHolder'>
            <Routes>
              <Route path='/' element={<div>Home</div>}></Route>
              {/* <Route
                path='/posts'
                element={<PostsClassBased x={isMenuCollapsed} />}
              ></Route> */}
              {/* <Route
                path='/posts'
                element={<PostFuncBased x={isMenuCollapsed} />}
              ></Route> */}
              <Route path='/users' element={<div>Users</div>}></Route>
              <Route path='*' element={<div>404 Not Found!</div>}></Route>
            </Routes>
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
