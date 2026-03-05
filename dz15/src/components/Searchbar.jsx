import { Component } from "react";

class Searchbar extends Component {
  state = {
    value: "",
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.value.trim()) return;

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;