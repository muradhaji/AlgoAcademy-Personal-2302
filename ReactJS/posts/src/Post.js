function Post(props) {
  let { data } = props;
  return (
    <div
      className='post'
      style={{ backgroundColor: 'darkcyan', margin: '8px', padding: '8px' }}
    >
      <div className='title'>{data.title}</div>
      <div className='body'>{data.body}</div>
    </div>
  );
}

export default Post;
