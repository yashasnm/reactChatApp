import React from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class InfiScroll extends React.Component {
  state = {
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 20 }))
      });
    }, 500);
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* <h1>demo: react-infinite-scroll-component</h1>
        <hr /> */}
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={400}
          style={{margin:"auto",position:"relative",marginTop:"15%"}}
          className="col-md-5 justify-content-center"
          endMessage={
            <p style={{ textAlign: "center" }}>
              {/* <b>Yay! You have seen it all</b> */}
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <div style={style} key={index}>
              
              div - #{index}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}
export default InfiScroll;
// render(<InfiniteScroll />, document.getElementById("root"));
