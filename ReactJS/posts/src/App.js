import './App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Posts from './Posts';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyContext from './MyContext';

function App() {
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  function toggleMenu() {
    setIsMenuCollapsed(!isMenuCollapsed);
  }

  return (
    <>
      <MyContext.Provider value={13}>
        <BrowserRouter>
          <Header toggleMenu={toggleMenu} />
          <main className='container'>
            <Aside collapsed={isMenuCollapsed} />
            <div className='routeHolder'>
              <Routes>
                <Route path='/' element={<div>Home</div>}></Route>
                <Route path='/posts' element={<Posts />}></Route>
                <Route path='/users' element={<div>Users</div>}></Route>
                <Route path='*' element={<div>404 Not Found!</div>}></Route>
                {/* <Route
                path='/posts'
                element={<PostsClassBased x={isMenuCollapsed} />}
              ></Route> */}
                {/* <Route
                path='/posts'
                element={<PostFuncBased x={isMenuCollapsed} />}
              ></Route> */}
              </Routes>
            </div>
          </main>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </>
  );
}

export default App;
