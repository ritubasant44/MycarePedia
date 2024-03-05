import React, { Component } from "react";
import { Form, FormControl } from "react-bootstrap";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}

export default SearchBar;
