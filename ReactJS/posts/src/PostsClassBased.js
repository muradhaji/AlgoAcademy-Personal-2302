import { Component } from 'react';

class PostsClassBased extends Component {
  state = {
    name: 'John',
    count: 0,
  };

  componentDidMount() {
    console.log('qurasdirildi');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('guncellendi');
    console.log(prevProps);
    console.log(this.props);
    console.log(prevState);
    console.log(this.state);
  }

  componentWillUnmount() {
    console.log('silindi');
  }

  render() {
    return (
      <>
        <div
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </div>
        <div
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          Decrease
        </div>
      </>
    );
  }
}

export default PostsClassBased;
