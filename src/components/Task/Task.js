import React from 'react';
import './Task.css';
import propTypes, { bool } from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends React.Component {
  static defaultProps = {
    complete: false,
    time: new Date(),
    onCompleted: () => {},
    onDeleted: () => {},
  };

  static propTypes = {
    complete: bool,
    onCompleted: propTypes.func,
    onDeleted: propTypes.func,
  };

  // setTaskTime = () => {
  //     this.setState({
  //         taskTime: formatDistanceToNow(this.props.time, {includeSeconds:true})
  //     })
  // }

  // componentDidMount() {
  //     this.setTaskTime()
  // }
  //
  // componentWillUnmount() {
  //     this.setTaskTime()
  // }

  render() {
    const { label, complete, onCompleted, onDeleted, id, time } = this.props;

    return (
      <div className="view">
        <input id={id} className="toggle" checked={complete} type="checkbox" onChange={onCompleted} />
        <label htmlFor={id}>
          <span className="description" onClick={onCompleted}>
            {label}
          </span>
          <span className="created">
            {`created ${formatDistanceToNow(time, {
              includeSeconds: true,
            })} ago`}
          </span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
