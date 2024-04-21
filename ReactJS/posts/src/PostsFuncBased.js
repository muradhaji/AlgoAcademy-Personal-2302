import { useEffect, useState } from 'react';

function PostFuncBased(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('qurasdirildi');

    return () => {
      console.log('silindi');
    };
  }, []);

  // useEffect(() => {
  //   console.log('props guncellendi');
  // }, [props]);

  // useEffect(() => {
  //   console.log('count guncellendi');
  // }, [count]);

  useEffect(() => {
    console.log('count ve ya props guncellendi');
  }, [count, props]);

  return (
    <>
      <div
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </div>
      <div
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </div>
    </>
  );
}

export default PostFuncBased;
