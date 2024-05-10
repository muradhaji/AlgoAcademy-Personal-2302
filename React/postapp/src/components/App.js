import '../css/App.css';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';
import Posts from './Posts';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyContext from '../MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slices/counter';
// import img1 from '../images/test.png';
// import { Pagination, Skeleton } from 'antd';

function App() {
  let [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  function toggleMenu() {
    setIsMenuCollapsed(!isMenuCollapsed);
  }

  let { value } = useSelector((state) => state.counter);
  let dispatch = useDispatch();

  return (
    <>
      <MyContext.Provider value={13}>
        <BrowserRouter>
          <Header toggleMenu={toggleMenu} />
          <main className='container'>
            <Aside collapsed={isMenuCollapsed} />
            <div className='routeHolder'>
              <Routes>
                <Route
                  path='/'
                  element={
                    <div>
                      Counter: {value}
                      <button
                        onClick={() => {
                          dispatch(increment());
                        }}
                      >
                        Increase
                      </button>
                      <button
                        onClick={() => {
                          dispatch(decrement());
                        }}
                      >
                        Decrease
                      </button>
                      {/* <img src={img1} />
                      <img src='https://placehold.co/600x400.png' /> */}
                      {/* <Pagination defaultCurrent={10} total={500} />
                      <Skeleton active avatar paragraph={{ rows: 10 }} /> */}
                    </div>
                  }
                ></Route>
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
