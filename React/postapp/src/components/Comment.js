import '../css/Comment.css';

function comment(props) {
  const { data } = props;
  return (
    <div className='comment'>
      <div className='name'>
        <b>Name: </b>
        {data.name}
      </div>
      <div className='email'>
        <b>Email: </b>
        {data.email}
      </div>
      <div className='body'>
        <b>Body: </b>
        {data.body}
      </div>
    </div>
  );
}

export default comment;
