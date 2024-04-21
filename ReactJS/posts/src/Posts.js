import { useEffect, useState } from 'react';
import Post from './Post';
import Spinner from './Spinner';

function Posts() {
  let [postList, setPostList] = useState([]);
  let [postsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    setPostsLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setPostList(data);
        // setPostsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setPostsLoading(false);
      });
  }, []);

  return (
    <div className='postsHolder' style={{ position: 'relative' }}>
      {postsLoading ? (
        <Spinner />
      ) : postList.length ? (
        postList.map((post) => <Post data={post} />)
      ) : (
        'Empty...'
      )}
    </div>
  );
}

export default Posts;
