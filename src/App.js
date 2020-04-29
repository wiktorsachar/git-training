import React from "react";
import { connect } from "react-redux";
import { increment, decrement, lock } from "./redux/actions";

// const increment = state => {
//   state.dispatch({ type: "INCREMENT" });
// };
// const decrement = state => {
//   state.dispatch({ type: "DECREMENT" });
// };
// const lock = state => {
//   state.dispatch({ type: "LOCK" });
// };

/*class Counter extends React.Component {
  // increment = () => {
  //   this.props.dispatch({ type: "INCREMENT" });
  // };

  // decrement = () => {
  //   this.props.dispatch({ type: "DECREMENT" });
  // };

  // lock = () => {
  //   this.props.dispatch({ type: "LOCK" });
  // };
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={() => decrement(this.props)}>-</button>
          <span>{this.props.count}</span>
          <button onClick={() => increment(this.props)}>+</button>
          <button onClick={() => lock(this.props)}>
            {this.props.locked ? "UNLOCK" : "LOCK"}
          </button>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     locked: state.locked,
//     count: state.count
//   };
// }
*/

function Counter(props) {
  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button disabled={props.locked} onClick={() => decrement(props)}>
          -
        </button>
        <span>{props.count}</span>
        <button disabled={props.locked} onClick={() => increment(props)}>
          +
        </button>
        <button onClick={() => lock(props)}>
          {props.locked ? "UNLOCK" : "LOCK"}
        </button>
      </div>
    </div>
  );
}

export default connect(
  /*mapStateToProps*/ state =>
    state /*{
    return { locked: state.locked, count: state.count };
  }*/
)(Counter);
