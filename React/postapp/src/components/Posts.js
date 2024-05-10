import { useContext, useEffect, useState } from 'react';
import Post from './Post';
import Spinner from './Spinner';
import MyContext from '../MyContext';

function Posts() {
  let [postList, setPostList] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);

  let data = useContext(MyContext);

  useEffect(() => {
    setPostsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setPostList(data);
        setPostsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPostsLoading(false);
      });
  }, []);

  return (
    <div className='postsHolder' style={{ position: 'relative' }}>
      {postsLoading ? (
        <Spinner />
      ) : postList.length ? (
        <>
          {/* <MyContext.Consumer>
            {(data) => <h1>{data}</h1>}
          </MyContext.Consumer> */}
          <h1>{data}</h1>
          {postList.map((post) => (
            <Post data={post} />
          ))}
        </>
      ) : (
        'Empty...'
      )}
    </div>
  );
}

export default Posts;
