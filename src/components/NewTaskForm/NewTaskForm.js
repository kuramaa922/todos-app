import React from 'react';
import './NewTaskForm.css';
import propTypes from 'prop-types';

export default class NewTaskForm extends React.Component {
  static defaultProps = {
    onAdded: () => {},
  };

  static propTypes = {
    onAdded: propTypes.func,
  };

  state = {
    label: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: '',
    });
  };

  setValue = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.setValue}
            value={this.state.label}
            size="50"
            autoFocus
            required
          />
        </form>
      </header>
    );
  }
}
