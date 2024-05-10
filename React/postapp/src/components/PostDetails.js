import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';
import Spinner from './Spinner';
import { isEmpty } from 'lodash';
import '../css/PostDetails.css';

function PostDetails() {
  let [currentPost, setCurrentPost] = useState();
  let [postLoading, setPostLoading] = useState(false);
  let [commentList, setCommentList] = useState([]);
  let [commentLoading, setCommentLoading] = useState(false);
  let [currentUser, setCurrentUser] = useState();
  let [userLoading, setUserLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (isFinite(id)) {
      setPostLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          if (!isEmpty(data)) {
            setCurrentPost(data);
          }
          setPostLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setPostLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    if (currentPost) {
      setCommentLoading(true);
      fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setCommentList(
            data.filter((comment) => comment.postId === Number(id))
          );
          setCommentLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setCommentLoading(false);
        });

      setUserLoading(true);
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          let foundUser = data.find((user) => user.id === currentPost.userId);
          if (foundUser) {
            setCurrentUser(foundUser);
          }
          setUserLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setUserLoading(false);
        });
    }
  }, [currentPost, id]);

  return (
    <div className='postDetails'>
      {postLoading ? (
        <Spinner />
      ) : currentPost ? (
        <>
          {userLoading ? (
            <Spinner />
          ) : currentUser ? (
            <div className='user'>
              <b>User:</b> {currentUser.name}
            </div>
          ) : (
            'User not found!'
          )}
          <div className='datails'>
            <div className='title'>
              <b>Title:</b> {currentPost.title}
            </div>
            <div className='body'>
              <b>Body:</b> {currentPost.body}
            </div>
          </div>
          {commentLoading ? (
            <Spinner />
          ) : commentList ? (
            commentList.map((comment) => <Comment data={comment} />)
          ) : (
            'There is not any comment!'
          )}
        </>
      ) : (
        'There is not any post with specified id!'
      )}
    </div>
  );
}

export default PostDetails;
